import Header from './Header';
import Upload from './Upload';
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
        padding: '3rem',
      }}
    >
      <Header></Header>
      <Upload></Upload>
    </main>
  );
}
