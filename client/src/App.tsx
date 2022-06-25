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
            paddingTop: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="display-6 text-6xl font-black"
        >
          Hi, welcome to
        </h1>
        <img src={i} alt="..." height={700} width={900}></img>
        <div className="App">
          <Button variant="primary">e</Button>
        </div>
      </div>
    </main>
  );
}
