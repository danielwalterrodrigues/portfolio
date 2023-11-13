import React, {Image} from 'react';
import '../App.css';
import '../Mobile.css';
import './destaqueHome.css';
import destaquelinhas from '../assets/destaque.png'
import { motion } from "framer-motion";

const DestaqueHome  = () => {

    return(
        <motion.div className='destaqueBox' 
        animate={{opacity: [0, 1, 0, 1, 1, 1]}}
        transition={{delay: 2, duration:4, type: 'spring', bounce: 0.6}}
        initial={{opacity: [0, 1, 0, 1, 1, 0]}}>
            <img src={destaquelinhas}></img>
        </motion.div>
    )
}

export default DestaqueHome