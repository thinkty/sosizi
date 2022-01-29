import React from 'react';
// import { Map } from './Map';

type Props = {
  message: string;
} & typeof defaultProps;

const defaultProps = {
  message: 'Hello World!',
};

export const App = (props: Props): JSX.Element => {
  return (
    <div
    >
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          font: 'caption',
          color: 'black',
        }}
      >
        <h1>
          { props.message }
        </h1>
      </div>
    </div>
  );
}
App.defaultProps = defaultProps;
