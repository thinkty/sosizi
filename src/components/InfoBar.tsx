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
} : {
  deliveryPoint: DeliveryPointType | null,
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
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          borderRadius: '20px',
        }}
      >
        <InfoBarHeader
          addr={deliveryPoint.addr}
          id={deliveryPoint.id}
        />
        <table
          style={{
            width: '100%',
            textAlign: 'center',
            verticalAlign: 'center',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: 'thin solid black',
                  borderRight: 'thin solid black',
                  padding: 10,
                }}
              >
                소식지
              </th>
              <th
                style={{
                  borderBottom: 'thin solid black',
                  borderLeft: 'thin solid black',
                  padding: 10,
                }}
              >
                포스터
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  borderTop: 'thin solid black',
                  borderRight: 'thin solid black',
                  borderBottom: deliveryPoint.note ? 'thin solid black' : 'none',
                  padding: 10,
                }}
              >
                { deliveryPoint.quantity }
              </td>
              <td
                style={{
                  borderTop: 'thin solid black',
                  borderLeft: 'thin solid black',
                  borderBottom: deliveryPoint.note ? 'thin solid black' : 'none',
                  padding: 10,
                }}
              >
                { deliveryPoint.poster ? 'O' : 'X' }
              </td>
            </tr>
          </tbody>
        </table>
        {
          deliveryPoint.note &&
          <div style={{ padding: 10 }}>
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
