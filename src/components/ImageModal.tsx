import React, { useState } from 'react';

type Props = {
  isMobile: boolean;
  open: boolean;
  pics: string[];
  closeModal: VoidFunction;
} & typeof defaultProps;

const defaultProps = {};

export const ImageModal = (props: Props): JSX.Element => {
  const { isMobile, open, pics, closeModal } = props;
  const [index, setIndex] = useState<number>(0);
  const isFirst = index == 0;
  const isLast = index == pics.length - 1;

  if (!open) {
    return <></>;
  }

  return (
    <div
      onClick={() => {
        if (!isMobile) {
          setIndex(0); // reset index
          closeModal();
        }
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#00000066',
        zIndex: 110,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      {
        isMobile &&
        <div
          onClick={() => {
            setIndex(0); // reset index
            closeModal();
          }}
          style={{
            position: 'absolute',
            top: 20,
            left: window.innerWidth / 2 - 25,
            width: 50,
            height: 50,
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: 100,
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path xmlns="http://www.w3.org/2000/svg" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0D0D0D"></path>
          </svg>
        </div>
      }
      {
        isFirst
        ?
        <div style={{ width: 50, height: 50 }} />
        :
        <div
          onClick={(e) => {
            !isFirst && setIndex(index - 1);
            e.stopPropagation(); // Prevent click through
          }}
          style={{
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: 100,
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="50" width="50">
            <path xmlns="http://www.w3.org/2000/svg" d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z" fill="#0D0D0D"></path>
          </svg>
        </div>
      }
      <img
        onClick={() => {}}
        src={`/images/${pics[index]}.jpg`}
        height={isMobile ? "auto" : "80%"}
        width={isMobile ? "90%" : "auto"}
        style={{
          backgroundColor: 'white',
          padding: isMobile ? 5 : 10,
          borderRadius: 10,
        }}
      />
      {
        isLast
        ?
        <div style={{ width: 50, height: 50 }} />
        :
        <div
          onClick={(e) => {
            setIndex(index + 1);
            e.stopPropagation();
          }}
          style={{
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: 100,
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="50" width="50">
            <path xmlns="http://www.w3.org/2000/svg" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="#0D0D0D"></path>
          </svg>
        </div>
      }
    </div>
  );
}
ImageModal.defaultProps = defaultProps;
