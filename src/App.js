import './App.css';
import logoGrande from './assets/logo_branco.png';
import Skills from './components/skills.js';
import RedesSociais from './components/redessociais.js';
import Tags from './components/tags.js';

function App() {
  return (
    <>
    <div className="laranja"></div>
      <div className="cinza">
        <div className='menumobile'>Menu Mobile</div>
        <div className='menuHome'>
          <ul className="menuHomeul">
            <li><a href="#"><span class="menuPonto">. </span>BIO</a></li>
            <li><a href="#"><span class="menuPonto">. </span>DEV</a></li>
            <li><a href="#"><span class="menuPonto">. </span>TXT</a></li>
            <li><a href="#"><span class="menuPonto">. </span>SOCIAL</a></li>
          </ul>
        </div>
      </div>
      <div className="branco">
        <img src={logoGrande} alt='Logotipo Daniel Rodrigues' className="logoHome"></img>
      </div>
      <div className="preto">
        <div className='preto_esq'><RedesSociais /></div>
        <div className='preto_centro'><Tags /></div>
        <div className='preto_dir'><Skills /></div>
      </div>
    </>
  );
}

export default App;
