import '../App.css';
import '../Mobile.css';
import './Logoabertura.css';
import { motion } from "framer-motion";
//import logoGrande from '../assets/logo_branco.png';
import logoDlaranja from '../assets/logoDlaranja.png';
import logoDcinza from '../assets/logoDcinza.png';
import logoDrosto from '../assets/logoDrosto.png';
import virgula from '../assets/virgula.png';
import portfolio from '../assets/portfolio.png';
import danielrodrigues from '../assets/danielrodrigues.png';
import logopequeno from '../assets/logopequeno.png';

const Logoabertura = () => {

    return (
        <>
        <div className='logoMobile'>
            <img src={logopequeno}></img>
        </div>
            <div className='divprincipal'>
                <div className='logoGrande'>
                <motion.div className='laranjaZindex'
                    animate={{opacity: 1, rotate: 1440}}
                    transition={{delay: 0, duration: 2}}
                    initial={{opacity: 0.5}}>
                    <img src={logoDlaranja} alt=' ' className="logoDlaranja"></img>
                </motion.div>
                <motion.div
                    animate={{opacity: 1}}
                    transition={{delay: 0, duration: 3}}
                    initial={{opacity: 0}}>
                    <img src={logoDcinza} alt=' ' className="logoDlaranja"></img>
                </motion.div>
                <motion.div 
                    animate={{y: '-104px', opacity: 1}}
                    transition={{delay: 2}}
                    initial={{opacity: 0}}
                    leave={{opacity: 0}}>
                    <img src={logoDrosto} alt=' ' className="logoDlaranja"></img>
                </motion.div>
                <motion.div className='laranjaZindex'
                    animate={{y: '-137px', x:'105px', opacity: 1}}
                    transition={{delay: 3}}
                    initial={{opacity: 0, y: '0px', x:'105px',}}>
                    <img src={virgula} alt=' ' className="logoDlaranja"></img>
                </motion.div>
                <motion.div className='laranjaZindex'
                    animate={{y: '-158px', x:'122px', opacity: 1}}
                    transition={{delay: 0, duration: 3}}
                    initial={{opacity: 0, y: '-158px', x:'122px'}}>
                    <img src={portfolio} alt=' ' className="logoDlaranja"></img>
                </motion.div>
                <motion.div className='laranjaZindex'
                    animate={{y: '-130px', x:'122px', opacity: 1}}
                    transition={{delay: 1.5, duration:5}}
                    initial={{opacity: 0, y: '-130px', x:'122px'}}>
                    <img src={danielrodrigues} alt=' ' className="logoDlaranja"></img>
                </motion.div>
                </div>
            </div>
        </>
        
    )
}

export default Logoabertura