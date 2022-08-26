import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import useScript from 'react-script-hook';
import { walkIcon } from './icons';
import { InfoBar } from './InfoBar';
import { MainBar } from './MainBar';

// TODO: Doesn't seem to be working
// Preload the images to reduce image render time. Takes an array of urls to
// render the images from.
export const preloadImages = (urls: string[]) => {
  const images = [];

  for (let i = 0; i < urls.length; i++) {
    const image = new Image();
    image.src = 'https://raw.githubusercontent.com/thinkty/sosizi/main/images/' + urls[i];
    images.push(image);
  }

  console.log('Preloaded', images.length, 'images');
};

/**
 * Type for the delivery points data
 * 
 * @param {string} quantity amount of newspaper to deliver for the given address
 * @param {string} id unique ID for the delivery point
 * @param {number[]} marker alt/longitude of the delivery point for displaying on the map
 * @param {string} note additional details for the delivery point
 * @param {string[]} pics unique IDs for the pics that contain delivery point detail
 * @param {boolean} poster whether the delivery point also needs poster to be dropped
 * @param {boolean} walk whether the delivery point should be approached by car or walking
 */
export type DeliveryPointType = {
  quantity: string;
  id: string;
  addr: string;
  marker: number[],
  note: string;
  pics: string[];
  poster: boolean;
  walk: boolean;
};

/**
 * Status of the application
 * - Ready : default status
 * - OnDelivery : delivery started and ongoing
 */
export enum Status {
  Ready,
  OnDelivery,
};

export const App = ({
  deliveryPoints,
} : {
  deliveryPoints: DeliveryPointType[],
}): JSX.Element => {
  const walkingDeliveryPoints: DeliveryPointType[] = [];
  const carDeliveryPoints: DeliveryPointType[] = [];

  // Organizing points into two groups: walking or car
  deliveryPoints.map((point) => {
    point.walk ? walkingDeliveryPoints.push(point) : carDeliveryPoints.push(point);
  });

  const [status, setStatus] = useState<Status>(Status.Ready);
  const [index, setIndex] = useState<number>(-1);

  // Dynamically load the Naver Maps API
  const [loading, error] = useScript({
    src: 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=z1u96vb25n',
    onload: () => {
      const defaultPoint = new naver.maps.LatLng(37.561643, 127.027604);
      const mapOptions = {
        center: defaultPoint,
        zoom: 17,
        minZoom: 17,
        zoomControl: false,
        mapTypeId: naver.maps.MapTypeId.NORMAL,
      };

      const naverMap = new naver.maps.Map('map', mapOptions);

      // Remove focus if background is clicked
      naver.maps.Event.addListener(naverMap, 'click', (_) => {
        setIndex(-1);
      });

      // Tracking delivery points
      window.addEventListener('selection', ((e: CustomEvent) => {
        const i = e.detail;

        if (!i || typeof i !== 'number') {
          console.error('Cannot recognize e.detail', e.detail);
          return;
        }

        naverMap.panTo([carDeliveryPoints[i].marker[0], carDeliveryPoints[i].marker[1]], {});
      }) as EventListener);

      // Update current location every interval
      if (navigator.geolocation) {
        const myLocationMarker = new naver.maps.Marker({
          position: defaultPoint,
          map: naverMap,
          icon: {
            content: ReactDOMServer.renderToString(<LocationMarker />),
            size: new naver.maps.Size(22, 35),
            anchor: new naver.maps.Point(11, 35),
          },
          draggable: false,
        });

        navigator.geolocation.watchPosition((position) => {
          myLocationMarker.setPosition([position.coords.latitude, position.coords.longitude]);
        });
      }

      // Add delivery points as markers to the map
      let deliveryOrder = 0;
      deliveryPoints.forEach((point) => {
        const deliveryMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(point.marker[0], point.marker[1]),
          map: naverMap,
          title: point.id,
          icon: {
            content: ReactDOMServer.renderToStaticMarkup(
              DeliveryMarker({
                  walk: point.walk,
                  order: point.walk ? 0 : ++deliveryOrder,
              })
            ),
            size: new naver.maps.Size(22, 35),
            anchor: new naver.maps.Point(11, 35),
          },
          draggable: false,
        });

        // Add click listeners to control which marker is on focus
        naver.maps.Event.addListener(deliveryMarker, 'click', (marker) => {
          const id = marker.overlay.title; // FIX: Not defined in Types
          if (!id) {
            console.error('Marker ID undefined: ', marker);
            return;
          }

          // Get the index of the marker and pan to the selected marker
          deliveryPoints.forEach((point, index, _) => {
            if (point.id === id) {
              setIndex(index);
              naverMap.panTo([point.marker[0], point.marker[1]], {});
              return;
            }
          });

          // Delivery point with the given ID not found
          console.error('Marker ID of', id, 'not found');
        });
      });
    }
  }); // useScript();

  if (error) {
    return (
      <div>
        Oops, something went wrong while loading script
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        id='map'
        style={{
          display: loading ? 'none' : 'block',
          width: '100vw',
          height: `${window.innerHeight}px`,
        }}
      ></div>
      <InfoBar
        deliveryPoint={index !== -1 ? carDeliveryPoints[index] : null}
        index={index}
      />
      <MainBar
        totalNumberOfCarDeliveryPoints={carDeliveryPoints.length}
        index={index}
        setIndex={(newIndex) => { setIndex(newIndex) }}
        status={status}
        setStatus={(newStatus) => { setStatus(newStatus) }}
      />
    </div>
  );
}

/**
 * @returns Marker component to be displayed as the user's current location
 */
const LocationMarker = () => {
  return (
    <div className='current'>
      <span className='marker-content'/>
    </div>
  );
}

/**
 * @param {boolean} walk whether the delivery point type is walkable
 * @param {number} order the priority of the delivery point
 * @returns Marker component to be displayed as a delivery point on the map
 */
const DeliveryMarker = ({
  walk,
  order
} : {
  walk: boolean,
  order: number,
}) => {
  return (
    <div
      style={{
        cursor: 'pointer',
        boxSizing: 'border-box',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        width: '30px',
        height: '30px',
        zIndex: 6,
        border: '5px solid transparent',
        borderRadius: '100px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(54, 54, 54, 0.7)',
      }}
    >
      {/* TODO: is the below className important? check Naver Map API */}
      <span className='marker-content'>
        { walk ? walkIcon : ++order }
      </span>
    </div>
  );
}
