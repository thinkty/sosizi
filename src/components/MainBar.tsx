import React from 'react';
import { Button } from './Button';
import { Divider } from './Divider';
import { Status } from './types';

type Props = {
  isMobile: boolean;
  totalNumberOfCarDeliveryPoints: number;
  index: number;
  setIndex: (newIndex: number) => void;
  status: Status;
  setStatus: (newStatus: Status) => void;
} & typeof defaultProps;

const defaultProps = {};

export const MainBar = (props: Props): JSX.Element => {
  const { isMobile, totalNumberOfCarDeliveryPoints, index, setIndex, status, setStatus } = props;

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
        width: isMobile ? '90%': '300px',
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
          <Button
            isMobile={isMobile}
            content="배달 시작"
            borderRadius="20px"
            onClick={() => {
              setStatus(Status.OnDelivery);
              setIndex(0);
              localStorage.setItem('currentIndex', '0');
            }}
          />
        </>
      }
      {
        status === Status.OnDelivery &&
        <>
          <Button
            isMobile={isMobile}
            content={index === totalNumberOfCarDeliveryPoints - 1 ? "끝" : "다음"}
            borderRadius="20px 0px 0px 20px"
            onClick={() => {
              if (index === totalNumberOfCarDeliveryPoints - 1) {
                setStatus(Status.Ready);
                setIndex(0);
                localStorage.setItem('currentIndex', '0');
              } else {
                setIndex(index + 1);
                localStorage.setItem('currentIndex', `${index + 1}`);
              }
            }}
          />
          <Divider />
          <Button
            isMobile={isMobile}
            content="중단"
            borderRadius="0px 20px 20px 0px"
            onClick={() => {
              setStatus(Status.Ready);
              setIndex(0);
              localStorage.setItem('currentIndex', '0');
            }}
          />
        </>
      }

    </div>
  );
}
MainBar.defaultProps = defaultProps;
