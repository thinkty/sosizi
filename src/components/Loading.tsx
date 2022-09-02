import React from 'react';

/**
 * @param {number} ms speed of the loading animation. bigger the slower
 * @param {string} message message to be displayed while loading
 */
export const Loading = ({
  message,
} : {
  message: string,
}) => {

  return (
    <div
      style={{
        width: '100vw',
        height: `${window.innerHeight}px`,
        backgroundColor: '#00000066',
        zIndex: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <div className='lds-dual-ring'></div>
      <div style={{ color: 'white' }}>
        { message }
      </div>
    </div>
  );
}