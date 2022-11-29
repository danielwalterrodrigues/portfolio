import './App.css';
import Logoabertura from './components/Logoabertura';
import {motion} from 'framer-motion';
import {useState} from 'react';
import Bio from './components/Bio/Bio.js';
import Dev from './components/Dev/Dev.js';
import Txt from './components/Txt/Txt.js';
import Social from './components/Social/Social.js';
import Menulateral from './components/Structurals/Menulateral';

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
      <div className='flex-container'>
        <div className='esquerda'>
          <Menulateral />
        </div>
        <div className='centro'>
          {abreLogo && <Logoabertura />}
          {abreBio && <Bio />}
          {abreDev && <Dev />}
          {abreTxt && <Txt />}
          {abreSocial && <Social />}  
              
        </div>
      </div>

      





    <motion.div className='menuHome' style={{display: 'none',}}
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

    </>
  );
}

export default App;
