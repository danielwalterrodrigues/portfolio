import './logoMenor.css';
import LogoMenor1 from '../assets/logo_interna1.png';
import LogoMenor2 from '../assets/logo_interna2.png';
import LogoMenor3 from '../assets/logo_interna3.png';
import { motion } from 'framer-motion';

const LogoMenor = () => {
    return(
        <>
        <div>
            <motion.div className='logoMenor1'
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 0.5 }}
            initial={{ x:'105px', opacity: 0}}>
                <img src={LogoMenor1}></img>
            </motion.div>
            <motion.div className='logoMenor1'
            animate={{ y:'0', opacity: 1}}
            transition={{delay: 0, duration: 1}}
            initial={{ y:'105px', opacity: 0}}>
                <img src={LogoMenor2}></img>
            </motion.div>
            <motion.div className='logoMenor1'
            animate={{ y:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 0.5, opacity: 0 }}
            initial={{ y:'-305px', opacity: 0}}>
                <img src={LogoMenor3}></img>
            </motion.div>
        </div>
        <motion.div className='titulo'
            animate={{ y:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 0.5 }}
            initial={{ y:'105px', opacity: 0}}>
            <span className='ponto'>.</span>BIO
        </motion.div>
        </>
    )
}
export default LogoMenor