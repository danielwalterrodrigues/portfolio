import './App.css';
import logoGrande from './assets/logo_branco.png';

function App() {
  return (
    <>
    <div className="laranja"></div>
      <div className="cinza"></div>
      <div className="branco">
        <img src={logoGrande} alt='Logotipo Daniel Rodrigues'></img>
      </div>
      <div className="preto"></div>
    </>
  );
}

export default App;
