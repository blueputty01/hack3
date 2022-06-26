import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Process from './Process';

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
      <Process></Process>
    </main>
  );
}
