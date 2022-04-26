import React from 'react';
import { InfoBarFooter } from './InfoBarFooter';
import { InfoBarHeader } from './InfoBarHeader';
import { Point } from './types';

type Props = {
  isMobile: boolean;
  info: Point | null;
  index: number | null;
  openModal: VoidFunction;
} & typeof defaultProps;

const defaultProps = {};

export const InfoBar = (props: Props): JSX.Element => {
  const { isMobile, info, index, openModal } = props;

  if (info == null) {
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
        top: 0,
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        width: isMobile ? '100%': '500px',
        minHeight: '60px',
        backgroundColor: 'white',
        zIndex: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <>
        <InfoBarHeader
          addr={info.addr}
          id={info.id}
          index={index}
        />
        <div style={{ padding: '10px' }}>
          [ { info.quantity } 매 ]
        </div>
        {
          info.note &&
          <div style={{ padding: '10px' }}>
            { info.note }
          </div>
        }
        {
          info.pics.length !== 0 &&
          <InfoBarFooter
            numberOfPics={info.pics.length}
            openModal={() => { openModal(); }}
          />
        }
      </>
    </div>
  );
}
InfoBar.defaultProps = defaultProps;
