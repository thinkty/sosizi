import React from 'react';
import { DeliveryPointType } from './App';
import { InfoBarFooter } from './InfoBarFooter';
import { InfoBarHeader } from './InfoBarHeader';

/**
 * Display information about the currently selected delivery point
 * 
 * @param {DeliveryPointType} deliveryPoint
 * @param {number} index Currently selected delivery point
 * @param {number} offest The number of walking delivery points so that when a
 * delivery point that needs a car is selected, the correct order will be shown
 */
export const InfoBar = ({
  deliveryPoint,
  index,
  offest,
} : {
  deliveryPoint: DeliveryPointType | null,
  index: number,
  offest: number,
}): JSX.Element => {

  if (deliveryPoint == null) {
    return <div />;
  }

  return (
    <div
      style={{
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        top: 10,
        width: '100%',
        maxWidth: '500px',
        minHeight: '60px',
        zIndex: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          paddingBottom: '10px',
          backgroundColor: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          borderRadius: '20px',
        }}
      >
        <InfoBarHeader
          addr={deliveryPoint.addr}
          id={deliveryPoint.id}
          order={index}
          offset={offest}
          walk={deliveryPoint.walk}
        />
        <div>
          { deliveryPoint.quantity } 장
        </div>
        {
          deliveryPoint.note &&
          <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            { deliveryPoint.note }
          </div>
        }
      </div>
      {
        deliveryPoint.pics.length !== 0 &&
        <InfoBarFooter pics={deliveryPoint.pics} />
      }
    </div>
  );
}
