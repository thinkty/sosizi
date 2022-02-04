import React, { useState, useEffect } from 'react';
import { InfoBar } from './InfoBar';
import { MainBar } from './MainBar';
import { Point, Status } from './types';

type Props = {
  mobileViewWidth: number;
  message: string;
} & typeof defaultProps;

const defaultProps = {
  mobileViewWidth: 600,
  message: 'Hello World!',
};

export const App = (props: Props): JSX.Element => {
  // Retrieve points from local storage and assert that the points is an array
  const rawPoints = localStorage.getItem('carDeliveryPoints');
  if (rawPoints == null) {
    alert('Error-001');
    return (<div/>);
  }

  const carDeliveryPoints = JSON.parse(rawPoints);
  if (!Array.isArray(carDeliveryPoints)) {
    alert('Error-002');
    return (<div/>);
  }

  const [isMobile, setScreen] = useState<boolean>(window.innerWidth < props.mobileViewWidth);
  const [index, setIndex] = useState<number>(0);
  const [status, setStatus] = useState<Status>(Status.Ready);
  const [info, setInfo] = useState<Point | null>(null);

  useEffect(() => {
    // Making the application responsive
    window.addEventListener('resize', () => {
      setScreen(window.innerWidth < props.mobileViewWidth);
    });

    localStorage.removeItem('selectedPoint');

    // Setting the info based on localStorage event for the key 'selectedPoint'.
    // If the current status is 'OnDelivery', the index value should be used to reference info value.
    // If the current status is 'Ready', the 'selectedPoint' should be used as the value of info.
    window.addEventListener('storage', () => {
      const raw = localStorage.getItem('selectedPoint');
      if (status === Status.Ready) {
        setInfo(raw != null ? JSON.parse(raw) : null);
      }
    });
  }, []);


  return (
    <>
      <InfoBar
        isMobile={isMobile}
        info={status === Status.Ready ? info : carDeliveryPoints[index]}
      />
      <MainBar
        isMobile={isMobile}
        totalNumberOfCarDeliveryPoints={carDeliveryPoints.length}
        index={index}
        setIndex={(newIndex) => { setIndex(newIndex) }}
        status={status}
        setStatus={(newStatus) => { setStatus(newStatus) }}
      />
    </>
  );
}
App.defaultProps = defaultProps;
