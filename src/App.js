import './App.css';
import logoGrande from './assets/logo_branco.png';

function App() {
  return (
    <>
    <div className="laranja"></div>
      <div className="cinza"></div>
      <div className="branco">
        <img src={logoGrande} alt=''></img>
        Logo 
      </div>
      <div className="preto"></div>
    </>
  );
}

export default App;
