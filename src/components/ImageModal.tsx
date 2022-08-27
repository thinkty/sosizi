import React, { useState } from 'react';
import { closeIcon, leftArrowIcon, rightArrowIcon } from './icons';

const commonButtonProps = {
  cursor: 'pointer',
  backgroundColor: 'white',
  borderRadius: 100,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

/**
 * Modal to display pictures of the delivery point
 *
 * @param {boolean} open whether the image modal is open or not
 * @param {string[]} pics array of IDs of pictures
 * @param {VoidFunction} closeModal function to close modal
 */
export const ImageModal = ({
  open,
  pics,
  closeModal,
} : {
  open: boolean,
  pics: string[],
  closeModal: VoidFunction,
}): JSX.Element => {
  const [picIndex, setPicIndex] = useState<number>(0);
  const isFirstPic = picIndex == 0;
  const isLastPic = picIndex == pics.length - 1;
  const isMobileView = window.innerWidth < 500;

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
      {/* Close Image Modal Button */}
      <div
        onClick={() => {
          setPicIndex(0);
          closeModal();
        }}
        style={commonButtonProps}
      >
        { closeIcon }
      </div>
      {/* Actual Image */}
      <img
        onClick={() => {}}
        // TODO: temporarily using Github as image CDN
        src={`https://raw.githubusercontent.com/thinkty/sosizi/main/images/${pics[picIndex]}.jpg`}
        height={isMobileView ? "auto" : "80%"}
        width={isMobileView ? "90%" : "auto"}
        style={{
          backgroundColor: 'white',
          padding: isMobileView ? 5 : 10,
          borderRadius: 10,
        }}
      />
      {/* Image Navigation (Left and Right Arrows) */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {
          !isFirstPic &&
          <div
            onClick={(e) => { !isFirstPic && setPicIndex(picIndex - 1); e.stopPropagation(); }}
            style={commonButtonProps}
          >
            { leftArrowIcon }
          </div>
        }
        {
          !isLastPic &&
          <div
            onClick={(e) => { setPicIndex(picIndex + 1); e.stopPropagation(); }}
            style={commonButtonProps}
          >
            { rightArrowIcon }
          </div>
        }
      </div>
    </div>
  );
}
