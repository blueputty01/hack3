import i from './classysalt.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            paddingTop: 30,
            paddingBottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="display-6 text-6xl font-black"
        >
          Hi, welcome to
        </h1>
        <img src={i} alt="..." height={550} width={750}></img>
        <div
          style={{
            paddingTop: 5,
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
              variant="btn btn-outline-primary"
            >
              Upload Image
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
