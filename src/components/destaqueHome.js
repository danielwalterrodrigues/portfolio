import React, {Image, useState} from 'react';
import '../App.css';
import '../Mobile.css';
import './destaqueHome.css';
import destaque1 from '../assets/destaque1.png'
import destaque2 from '../assets/destaque2.png'
import destaque3 from '../assets/destaque3.png'
import destaque4 from '../assets/destaque4.png'
import reload from '../assets/reload.png'
import { motion } from "framer-motion";

const DestaqueHome  = () => {
    const [destaque, setDestaque] = useState(1)
    
    const changeImage = () => {
        const imagemDestaque = Math.floor(Math.random() * 4) + 1;

            if (imagemDestaque === destaque) {
                setDestaque(Math.floor(Math.random() * 4) + 1) 
            } else {
                setDestaque(imagemDestaque);
            }
    }

    return(
        <motion.div className='destaqueBox' 
        animate={{opacity: [0, 1, 0, 1, 1, 1]}}
        transition={{delay: 2, duration:4, type: 'spring', bounce: 0.6}}
        initial={{opacity: [0, 1, 0, 1, 1, 0]}}>
            <img src={require(`../assets/destaque${destaque}.png`)}></img>
            <br />
               <img src={reload} onClick={changeImage}></img>
        </motion.div>
    )
}

export default DestaqueHome