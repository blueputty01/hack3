import BannerImage from './banner.png';
import Process from '../Process';

export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          paddingBottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
    </div>
  );
}
