import './Bio.css';
import '../internas.css';
import { motion } from 'framer-motion';
import {useEffect} from 'react';
import Texto from './texto.js';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import googleplay from '../../assets/googleplay.png';


const Bio = () => {

    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
      var textobio = Texto;
      return (
        <>
        
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
           <div className='esquerda'>
            <textarea value={textobio} className="textobox">
                
            </textarea>
           </div>
          <div className='direita'>
            <div className='linkedin github'>
                <a href="https://linkedin.com/in/danielrodrigues" target='_blank'><img src={linkedin} className='imgLinks'></img></a>
            </div>      
            <div className='linkedin github'>
                <a href="https://github.com/danielwalterrodrigues" target='_blank'><img src={github} className='imgLinks'></img></a>
            </div>      
            <div className='linkedin github'>
                <a href="https://play.google.com/store/apps/developer?id=Daniel+Walter+Rodrigues" target='_blank'><img src={googleplay} className='imgLinks'></img></a>
            </div>       
          </div>
        </motion.div>
        </>

      );
}
export default Bio
