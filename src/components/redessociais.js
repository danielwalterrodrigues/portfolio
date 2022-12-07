import '../Mobile.css';
import '../App.css';
import { motion } from "framer-motion";

function redesSociais() {

    return (
        
        <>
        <div className='social_preto_separacao'>
            <motion.div className='social_preto_rodape' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.1, ease: [0, 0.71, 0.2, 1.01]}}>E</motion.div>
            <motion.div className='social_preto_rodape' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01]}}>Q</motion.div>
            <motion.div className='social_preto_rodape' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01]}}>C</motion.div>
            <motion.div className='social_preto_rodape' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01]}}>e</motion.div>
            <motion.div className='social_preto_rodape' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>M</motion.div>
            <motion.div className='social_preto_rodape' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.6, ease: [0, 0.71, 0.2, 1.01]}}>k</motion.div>
            <motion.div className='social_preto_rodape' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.7, ease: [0, 0.71, 0.2, 1.01]}}>L</motion.div>
        </div>
        <div className='social_preto_separacao'>
            <motion.div
                className="whatsapp"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                >
                {"11 95367 - 0683"}
                </motion.div>
                    
        </div>                
        
        </>
    )
}

export default redesSociais
