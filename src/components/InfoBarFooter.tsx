import React, { useState } from 'react';
import { ImageModal } from './ImageModal';

/**
 * @param {string[]} pics IDs for the pictures
 */
export const InfoBarFooter = ({
  pics,
} : {
  pics: string[],
}): JSX.Element => {
  const [hovering, setHover] = useState<boolean>(false);
  const [open, openModal] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseEnter={() => { setHover(true); }}
        onMouseLeave={() => { setHover(false); }}
        onClick={() => { openModal(true); }}
        style={{
          backgroundColor: hovering ? 'rgba(54, 54, 54, 0.7)' : '#000000',
          cursor: 'pointer',
          color: 'white',
          padding: '10px',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        사진 보기
      </div>
      <ImageModal
        open={open}
        pics={pics}
        closeModal={() => { openModal(false); }}
      />
    </>
  );
}
