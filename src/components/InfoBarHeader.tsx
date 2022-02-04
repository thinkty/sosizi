import React from 'react';

type Props = {
  addr: string;
  id: string;
  index: number | null;
} & typeof defaultProps;

const defaultProps = {};

export const InfoBarHeader = (props: Props): JSX.Element => {
  const { addr, id, index } = props;

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        paddingTop: '10px',
        paddingBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ paddingLeft: '10px' }} >
        {
          index !== null &&
          <div className="marker car">
            <span className="marker-content">
              { index + 1 }
            </span>
          </div>
        }
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        { addr }
        <div style={{ color: 'grey' }}>
          { id }통
        </div>
      </div>
      <div />
    </div>
  );
}
InfoBarHeader.defaultProps = defaultProps;
