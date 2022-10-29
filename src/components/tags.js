import React from 'react';
import './tags.css';
import { motion } from "framer-motion";
import ColcheteAbre from '../assets/colchete_abre.png';
import ColcheteFecha from '../assets/colchete_fecha.png';
import TagsPreto from './tagsPreto';

const Tags = () => {

return (

    <>
 <motion.div className='pretoanimado'
      initial={{ y: 1000, opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 3,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {
        <>
          <div className='bloco1'>
            <div className="titskills">TAGS</div>
             <img src={ColcheteAbre} alt=" "></img>
            </div>
          <div className='bloco2'>
            <TagsPreto />
          </div>
          <div className='bloco4'><img src={ColcheteFecha} alt=" "></img></div>
        </>
      }
    </motion.div>
    </>

)

}

export default Tags