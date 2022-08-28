import React, { useEffect, useState } from 'react';

/**
 * @param {number} ms speed of the loading animation. bigger the slower
 * @param {string} message message to be displayed while loading
 */
export const Loading = ({
  ms,
  message,
} : {
  ms: number,
  message: string,
}) => {

  // Calculate how many circles to show
  const length = parseInt('' + window.innerWidth / 100, 10);
  const [index, setIndex] = useState<number>(0);

  // Set an interval to update the animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1 < length ? index + 1 : 0);
    }, ms);

    return () => clearInterval(interval);
  }, []);

  const dots: JSX.Element[] = [];
  for (let i = 0; i < length; i++) {
    dots.push(
      <div
        key={i}
        style={{
          width: '50px',
          height: '50px',
          border: '3px solid white',
          borderRadius: '20px',
          backgroundColor: i == index ? 'white' : 'transparent',
        }}
      />
    );
  }

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        { dots }
      </div>
      <div style={{ color: 'white' }}>
        { message }
      </div>
    </div>
  );
}