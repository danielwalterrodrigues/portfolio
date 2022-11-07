import './Bio.css';
import '../internas.css';
import { motion } from 'framer-motion';
import {useEffect} from 'react';
import Texto from './texto.js';
import Mais from './Mais';


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
        <Mais />
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
           <div className='esquerda'>
            <textarea value={textobio} className="textobox">
                
            </textarea>
           </div>
          <div
            class="linkedin badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="danielrodrigues"
            data-version="v1"
          >
            <a
              class="badge-base__link LI-simple-link"
              href="https://au.linkedin.com/in/danielrodrigues?trk=profile-badge"
            />
          </div>
        </motion.div>
        </>

      );
}
export default Bio
