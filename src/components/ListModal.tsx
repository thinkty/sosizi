import React from 'react';
import { DeliveryPointType } from './App';
import { closeIcon } from './icons';

/**
 * Modal to display pictures of the delivery point
 *
 * @param {boolean} open whether the image modal is open or not
 * @param {DeliveryPointType[]} pics array of delivery points
 * @param {VoidFunction} closeModal function to close modal
 */
export const ListModal = ({
  open,
  walkingDeliveryPoints,
  carDeliveryPoints,
  closeModal,
} : {
  open: boolean,
  walkingDeliveryPoints: DeliveryPointType[],
  carDeliveryPoints: DeliveryPointType[],
  closeModal: VoidFunction,
}): JSX.Element => {

  if (!open) {
    return <></>;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: `${window.innerHeight}px`,
        backgroundColor: '#00000066',
        zIndex: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      {/* Close Modal Button */}
      <div
        onClick={() => { closeModal() }}
        style={{
          cursor: 'pointer',
          backgroundColor: 'white',
          borderRadius: 20,
          padding: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        { closeIcon }
      </div>
      {/* List of delivery points */}
      <table
        style={{
          display: 'block',
          maxHeight: '80vh',
          overflow: 'auto',
          backgroundColor: 'white',
          borderRadius: 10,
          maxWidth: '90vw',
          textAlign: 'center',
          verticalAlign: 'center',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <TableCell header content='순서' isLeftMost />
            <TableCell header content='주소' />
            <TableCell header content='통' />
            <TableCell header content='소식지' isRightMost />
          </tr>
        </thead>
        <tbody>
          {
            walkingDeliveryPoints.map((point) => ListItem({ point, order: '-' }))
          }
          {
            carDeliveryPoints.map((point, index) => ListItem({ point, order: index + 1 }))
          }
        </tbody>
      </table>
    </div>
  );
}

const ListItem = ({
  point,
  order,
} : {
  point: DeliveryPointType,
  order: number | string,
}) => (
  <tr
    key={point.id}
  >
    <TableCell header={false} content={order} isLeftMost />
    <TableCell header={false} content={point.addr} />
    <TableCell header={false} content={point.id} />
    <TableCell header={false} content={point.quantity} isRightMost />
  </tr>
);

const TableCell = ({
  header,
  content,
  isLeftMost = false,
  isRightMost = false,
} : {
  header: boolean,
  content: string | number,
  isLeftMost?: boolean,
  isRightMost?: boolean,
}) => (

  header ?
  <th
    style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'black',
      color: 'white',
      borderLeft: isLeftMost ? 'none' : 'thin solid white',
      borderRight: isRightMost ? 'none' : 'thin solid white',
      borderTopLeftRadius: isLeftMost ? 10 : 0,
      borderTopRightRadius: isRightMost ? 10 : 0,
      padding: '10px',
    }}
  >
    { content }
  </th>
  :
  <td
    style={{
      borderLeft: isLeftMost ? 'none' : 'thin solid black',
      borderRight: isRightMost ? 'none' : 'thin solid black',
      padding: '5px',
    }}
  >
    { content }
  </td>
);
