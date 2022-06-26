import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Process from './Process';

export default function App() {
  return (
    <main className="main">
      <Header></Header>
      <Process></Process>
    </main>
  );
}
