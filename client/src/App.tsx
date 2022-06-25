import './App.scss';

export default function App() {
  return (
    <main id="homepage">
      <section className="home"></section>
      <section className="upload" id="upload"></section>
    </main>
  );
}

export const downButton = () => {
  return <button className="outline-info">↓</button>;
};
