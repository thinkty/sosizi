import React, { useState } from 'react';

type Props = {
  pics: string[];
} & typeof defaultProps;

const defaultProps = {};

export const InfoBarFooter = (props: Props): JSX.Element => {
  const { pics } = props;
  const [hovering, setHover] = useState<boolean>(false);
  const numberOfPics = pics.length;

  return (
    <div
      onMouseEnter={() => { setHover(true); }}
      onMouseLeave={() => { setHover(false); }}
      style={{
        width: '100%',
        backgroundColor: hovering ? '#72bcd4' : '#86c5da',
        cursor: 'pointer',
        color: 'white',
        paddingTop: '10px',
        paddingBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      사진 보기 { numberOfPics > 1 && `(${numberOfPics}장)` } 
    </div>
  );
}
InfoBarFooter.defaultProps = defaultProps;
