import React, { useState, useEffect } from 'react';
import { ImageModal } from './ImageModal';
import { InfoBar } from './InfoBar';
import { MainBar } from './MainBar';
import { Point, Status } from './types';

type Props = {
  mobileViewWidth: number;
} & typeof defaultProps;

const defaultProps = {
  mobileViewWidth: 600,
};

// Preload the images to reduce image render time. Takes an array of urls to
// render the images from.
const preloadImages = (urls: string[]) => {
  const images = [];

  for (let i = 0; i < urls.length; i++) {
    const image = new Image();
    image.src = '/images/' + urls[i];
    images.push(image);
  }

  console.log('Preloaded', images.length, 'images');
};

export const App = (props: Props): JSX.Element => {
  // Retrieve points from local storage and assert that the points is an array
  const rawPoints = localStorage.getItem('carDeliveryPoints');
  if (rawPoints == null) {
    alert('Error-001 페이지를 새로고침 해주세요.');
    return (<div/>);
  }

  const carDeliveryPoints: Point[] = JSON.parse(rawPoints);
  if (!Array.isArray(carDeliveryPoints)) {
    alert('Error-002');
    return (<div/>);
  }

  const [isMobile, setScreen] = useState<boolean>(window.innerWidth < props.mobileViewWidth);
  const [index, setIndex] = useState<number>(0);
  const [status, setStatus] = useState<Status>(Status.Ready);
  const [info, setInfo] = useState<Point | null>(null);
  const [modalOpen, openModal] = useState<boolean>(false);

  useEffect(() => {
    // Making the application responsive
    window.addEventListener('resize', () => {
      setScreen(window.innerWidth < props.mobileViewWidth);
    });

    // Preload images to reduce lag
    const imageUrls: string[] = [];
    for (let i = 0; i < carDeliveryPoints.length; i++) {
      imageUrls.push(...carDeliveryPoints[i].pics);
    }
    preloadImages(imageUrls);

    // Reset session
    localStorage.removeItem('selectedPoint');

    // Setting the info based on localStorage event for the key 'selectedPoint'.
    // If the current status is 'OnDelivery', the index value should be used to reference info value.
    // If the current status is 'Ready', the 'selectedPoint' should be used as the value of info.
    window.addEventListener('storage', () => {
      const raw = localStorage.getItem('selectedPoint');
      if (status === Status.Ready) {
        setInfo(raw != null ? JSON.parse(raw) : null);
      }
    });
  }, []);


  return (
    <>
      <InfoBar
        isMobile={isMobile}
        info={status === Status.Ready ? info : carDeliveryPoints[index]}
        index={status === Status.Ready ? null : index}
        openModal={() => { openModal(true) }}
      />
      <MainBar
        isMobile={isMobile}
        totalNumberOfCarDeliveryPoints={carDeliveryPoints.length}
        index={index}
        setIndex={(newIndex) => { setIndex(newIndex) }}
        status={status}
        setStatus={(newStatus) => { setStatus(newStatus) }}
      />
      <ImageModal
        isMobile={isMobile}
        open={modalOpen}
        pics={status === Status.Ready ? info == null ? [] : info.pics : carDeliveryPoints[index].pics}
        closeModal={() => { openModal(false); }}
      />
    </>
  );
}
App.defaultProps = defaultProps;
