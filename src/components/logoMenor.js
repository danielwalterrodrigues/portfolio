import './logoMenor.css';
import { motion } from 'framer-motion';
import Logopequeno from '../assets/logointernas.png';

const LogoMenor = () => {

    
    return(
        <>
        <div>
            <motion.div className='logoMenor1'
            animate={{ y: '0px', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 0.5 }}
            initial={{ y:'105px', opacity: 0}}>
                <img src={Logopequeno} alt="Logo Daniel Rodrigues Portfolio" className='logomenorImg'></img>
            </motion.div>
        </div>
        </>
    )
}
export default LogoMenor