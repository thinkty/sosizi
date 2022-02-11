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
      {
        info == null &&
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
          <path xmlns="http://www.w3.org/2000/svg" d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L5.71706 7.13127C4.28639 8.20737 3.03925 9.68543 2.10557 11.5528C1.96481 11.8343 1.96481 12.1657 2.10557 12.4472C4.26379 16.7637 8.09687 19 12 19C13.5552 19 15.0992 18.645 16.5306 17.9448L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L4.70711 3.29289ZM15.0138 16.428C14.0343 16.8112 13.0134 17 12 17C9.03121 17 5.99806 15.3792 4.12966 12C4.94721 10.5214 5.98778 9.3794 7.14838 8.56259L9.29237 10.7066C9.10495 11.0982 9 11.5369 9 12C9 13.6569 10.3431 15 12 15C12.4631 15 12.9018 14.8951 13.2934 14.7076L15.0138 16.428Z" fill="#0D0D0D"></path>
          <path xmlns="http://www.w3.org/2000/svg" d="M18.5523 13.8955C19.0353 13.3402 19.4784 12.7088 19.8703 12C18.0019 8.62078 14.9687 7 12 7C11.888 7 11.7759 7.00231 11.6637 7.00693L9.87939 5.22258C10.5774 5.07451 11.2875 5 12 5C15.9031 5 19.7362 7.23635 21.8944 11.5528C22.0352 11.8343 22.0352 12.1657 21.8944 12.4472C21.3504 13.5352 20.7 14.491 19.9689 15.3121L18.5523 13.8955Z" fill="#0D0D0D"></path>
        </svg>
      }
      {
        info != null &&
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
      }
    </div>
  );
}
InfoBar.defaultProps = defaultProps;
