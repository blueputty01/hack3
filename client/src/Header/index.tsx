import React from 'react';
import BannerImage from './banner.png';

export default function Header() {
  return (
    <React.Fragment>
      <h1
        style={{
          paddingTop: 30,
          paddingBottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: '1',
        }}
        className="display-6 text-6xl font-black"
      >
        Hi, welcome to
      </h1>
      <img
        src={BannerImage}
        alt="banner"
        style={{
          minHeight: 0,
          minWidth: 0,
          width: 'auto',
          height: 'auto',
        }}
      ></img>
    </React.Fragment>
  );
}
