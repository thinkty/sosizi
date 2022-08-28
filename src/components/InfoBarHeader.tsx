import React from 'react';

export const InfoBarHeader = ({
  addr,
  id,
} : {
  addr: string,
  id: string,
}): JSX.Element => {

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ padding: '10px' }}>
        { addr }
      </div>
      <div style={{ padding: '10px' }}>
        { id }통
      </div>
    </div>
  );
}
