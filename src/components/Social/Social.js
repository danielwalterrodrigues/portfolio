import './Social.css';
import '../internas.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Txt = () => {

    return (
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
            Transplantado
        </motion.div>
    )
}
export default Txt