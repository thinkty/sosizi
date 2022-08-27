import React from 'react';

export const InfoBarHeader = ({
  addr,
  id,
  order,
  offset,
  walk,
} : {
  addr: string,
  id: string,
  order: number,
  offset: number,
  walk: boolean,
}): JSX.Element => {

  return (
    <div
      style={{
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: 'black',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div>
        {
          !walk &&
          <div className="marker car">
            <span className="marker-content">
              { order + 1 - offset } 번
            </span>
          </div>
        }
      </div>
      <div>
        { addr }
      </div>
      <div>
        { id }통
      </div>
    </div>
  );
}
