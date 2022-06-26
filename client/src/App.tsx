import Button from 'react-bootstrap/Button';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Header></Header>
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
    </main>
  );
}
