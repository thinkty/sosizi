import React, { useState } from 'react';

type Props = {
  isMobile: boolean;
  content: string;
  borderRadius: string;
  onClick: VoidFunction;
} & typeof defaultProps;

const defaultProps = {
  onClick: () => { console.log('Default onClick handler'); }
};

export const Button = (props: Props): JSX.Element => {
  const [isHovering, setHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        props.onClick();
      }}
      style={{
        flex: 1,
        borderRadius: props.borderRadius,
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isHovering ? '#f3f3f3' : 'transparent',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      { props.content }
    </div>
  );
}

Button.defaultProps = defaultProps;
