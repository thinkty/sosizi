import React, { useState } from 'react';

/**
 * @param {string | JSX.Element} content Content to be displayed in the button
 * @param {string} borderRadius border radius of the button in '00px'
 * @param {VoidFunction} onClick function to be called on click
 * @returns 
 */
export const Button = ({
  content,
  borderRadius,
  onClick,
} : {
  content: string | JSX.Element,
  borderRadius: string,
  onClick: VoidFunction,
}): JSX.Element => {
  const [isHovering, setHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        flex: 1,
        borderRadius: borderRadius,
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isHovering ? '#f3f3f3' : 'transparent',
        fontSize: '20px',
        fontWeight: 'bold',
        userSelect: 'none', // Don't make the texts selectable
      }}
    >
      { content }
    </div>
  );
}
