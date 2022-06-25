import i from './classysalt.png';
import Button from 'react-bootstrap/Button';

export default function App() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h1
          style={{
            paddingTop: 50,
            paddingBottom: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="display-6 text-6xl font-black"
        >
          Hi, welcome to
        </h1>
        <img src={i} alt="..." height={650} width={825}></img>
        <div
          style={{
            paddingTop: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ paddingBottom: 25 }}>
            <Button
              onClick={() => {
                console.log('This thing works');
              }}
              variant="primary"
            >
              Please for fucks sake fucking work
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
