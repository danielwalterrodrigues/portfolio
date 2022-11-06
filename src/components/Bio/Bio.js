import './Bio.css';
import '../internas.css';
import { motion } from 'framer-motion';
import {useEffect, useState} from 'react';
import api from './Api';
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


const BioX = () => {
    const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/danielwalterrodrigues")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


    return (
        <>
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
            <p>GitHub</p>
            <p>Nome: {user?.name} ({user?.login})</p>
            <p>Email: {user?.email}</p>
            <p>Resumo: {user?.bio}</p>
            <p>Hireable: {user?.repository}</p>
        </motion.div>
        </>
    )
}