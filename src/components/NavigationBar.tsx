import React, { useState } from 'react';
import { DeliveryPointType, Status } from './App';
import { Button } from './Button';
import { Divider } from './Divider';
import { endIcon, listIcon, nextIcon, playIcon, prevIcon, stopIcon } from './icons';
import { ListModal } from './ListModal';

export const NavigationBar = ({
  length,
  index,
  setIndex,
  status,
  setStatus,
  walkingDeliveryPoints,
  carDeliveryPoints,
} : {
  length: number,
  index: number,
  setIndex: (newIndex: number) => void,
  status: Status,
  setStatus: (newStatus: Status) => void,
  walkingDeliveryPoints: DeliveryPointType[],
  carDeliveryPoints: DeliveryPointType[],
}): JSX.Element => {

  const [open, openModal] = useState<boolean>(true);

  return (
    <div
      style={{
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        bottom: '10px',
        borderRadius: 20,
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        width: '90%',
        maxWidth: '300px',
        height: '60px',
        backgroundColor: 'white',
        zIndex: 105,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'normal',
        alignItems: 'center',
      }}
    >
      {
        status === Status.Ready &&
        <>
          <ListModal
            open={open}
            walkingDeliveryPoints={walkingDeliveryPoints}
            carDeliveryPoints={carDeliveryPoints}
            closeModal={() => { openModal(false) }}
          />
          <Button
            content={listIcon}
            borderRadius="20px 0px 0px 20px"
            onClick={() => { openModal(true) }}
          />
          <Divider />
          <Button
            content={playIcon}
            borderRadius="0px 20px 20px 0px"
            onClick={() => {
              setStatus(Status.OnDelivery);
              setIndex(0);

              // Trigger pan to current delivery point
              window.dispatchEvent(new CustomEvent('selection', { detail: 0 }));
            }}
          />
        </>
      }
      {
        status === Status.OnDelivery &&
        <>
          {/* Prev button */}
          {
            index >= 1 &&
            <>
              <Button
                content={prevIcon}
                borderRadius="20px 0px 0px 20px"
                onClick={() => {
                  setIndex(index - 1);

                  // Trigger pan to marker
                  window.dispatchEvent(new CustomEvent('selection', { detail: index - 1 }));
                }}
              />
              <Divider />
            </>
          }
          {/* Stop button */}
          <Button
            content={index !== length - 1 ? stopIcon : endIcon}
            borderRadius="0px"
            onClick={() => {
              setStatus(Status.Ready);
              setIndex(-1);
            }}
          />
          {/* Next button */}
          {
            index !== length - 1 &&
            <>
              <Divider />
              <Button
                content={nextIcon}
                borderRadius="0px 20px 20px 0px"
                onClick={() => {
                  setIndex(index + 1);

                  // Trigger pan to current delivery point
                  window.dispatchEvent(new CustomEvent('selection', { detail: index + 1 }));
                }}
              />
            </>
          }
        </>
      }

    </div>
  );
}
