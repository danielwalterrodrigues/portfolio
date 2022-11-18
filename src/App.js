import './App.css';
import Tags from './components/tags.js';
import RedesSociais from './components/redessociais.js';
import Logoabertura from './components/Logoabertura';
import {motion} from 'framer-motion';
import logopeq from './assets/logo_branco.png';
import {useState} from 'react';
import Bio from './components/Bio/Bio.js';
import Dev from './components/Dev/Dev.js';
import Txt from './components/Txt/Txt.js';
import Social from './components/Social/Social.js';
import LogoMenor from './components/logoMenor';
import Mais from './components/Bio/Mais';

function App() {
  const [abreLogo, setAbreLogo] = useState(true);
  const [abreLogoMenor, setAbreLogoMenor] = useState(false);
  const [titulo, setTitulo] = useState('');

  const [abreBio, setAbreBio] = useState(false);
  const [abreDev, setAbreDev] = useState(false);
  const [abreTxt, setAbreTxt] = useState(false);
  const [abreSocial, setAbreSocial] = useState(false);
  
  const abreBioClick = event => {
    setAbreLogo(false);
    setAbreLogoMenor(true);
    setAbreBio(true);
    setAbreDev(false);
    setAbreTxt(false);
    setAbreSocial(false);
    setTitulo('BIO');
  };
  const abreDevClick = event => {
    setAbreLogo(false);
    setAbreLogoMenor(true);
    setAbreBio(false);
    setAbreDev(true);
    setAbreTxt(false);
    setAbreSocial(false);
    setTitulo('DEV');
  };
  const abreTxtClick = event => {
    setAbreLogo(false);
    setAbreLogoMenor(true);
    setAbreBio(false);
    setAbreDev(false);
    setAbreTxt(true);
    setAbreSocial(false);
    setTitulo('WRITE');
  };
  const abreSocialClick = event => {
    setAbreLogo(false);
    setAbreLogoMenor(true);
    setAbreBio(false);
    setAbreDev(false);
    setAbreTxt(false);
    setAbreSocial(true);
    setTitulo('TX');
  };
  return (
    <>

    <Mais />
    <motion.div className="laranja"
      animate={{width: '100%',}}
      transition={{delay: 3, duration:1}}
      initial={{width: 0,}}>
        {abreLogoMenor && <LogoMenor titulo={titulo} />}
    </motion.div>
    
    <motion.div className="cinza"
      animate={{width: "100vw", x: 0}}
      transition={{delay: 3, duration:0.5, origin: 1}}
      initial={{width: 0, width: "0vw", x: "100vw"}}>
        <div className='menumobile'>Menu Mobile</div>
        <motion.div className='menuHome'
          animate={{y:'-80px', opacity:1}}
          transition={{delay: 4, duration:0.5, origin: 1}}
          initial={{y: '-300px',opacity:0}}
          >
          <ul className="menuHomeul">
            <li><a onClick={abreBioClick}>
              <span className="menuPonto">. </span>BIO</a>
            </li>
            <li><a onClick={abreDevClick}>
              <span className="menuPonto">. </span>DEV</a>
            </li>
            <li><a onClick={abreTxtClick}>
              <span className="menuPonto">. </span>WRITE</a>
            </li>
            <li><a onClick={abreSocialClick}>
              <span className="menuPonto">. </span>TX</a>
            </li>
          </ul>
        </motion.div>

{abreBio && <Bio />}
{abreDev && <Dev />}
{abreTxt && <Txt />}
{abreSocial && <Social />}


      </motion.div>
      <div className="branco">
      
        <div className='logo_telagde'>
        {abreLogo && <Logoabertura />}
        </div>
        
        <div className='logo_telapeq'>
          <img src={logopeq} className="logoHome"></img>
        </div>
      </div>
      <motion.div className="preto"
        animate={{opacity:1}}
          transition={{delay: 4, duration:0.5, origin: 1}}
          initial={{opacity:0}}>
        <div className='preto_esq'><RedesSociais /></div>
        <div className='preto_centro'></div>
        <div className='preto_dir'></div>
      </motion.div>
    </>
  );
}

export default App;
