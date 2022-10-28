import './App.css';
import Skills from './components/skills.js';
import RedesSociais from './components/redessociais.js';
import Logoabertura from './components/Logoabertura';
import {motion} from 'framer-motion';
import logopeq from './assets/logo_branco.png';
function App() {
  return (
    <>
    
    <motion.div className="laranja"
      animate={{width: '100%',}}
      transition={{delay: 3, duration:1}}
      initial={{width: 0,}}>
        
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
            <li><a href="#"><span class="menuPonto">. </span>BIO</a></li>
            <li><a href="#"><span class="menuPonto">. </span>DEV</a></li>
            <li><a href="#"><span class="menuPonto">. </span>TXT</a></li>
            <li><a href="#"><span class="menuPonto">. </span>SOCIAL</a></li>
          </ul>
        </motion.div>
      </motion.div>
      <div className="branco">
        <div className='logo_telagde'>
          <Logoabertura />
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
        <div className='preto_dir'><Skills /></div>
      </motion.div>
    </>
  );
}

export default App;
