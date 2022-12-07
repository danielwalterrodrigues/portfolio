import { motion } from "framer-motion";
import './Titulo.css';
import '../../Mobile.css';


const Titulo = (props) => {

    const altura = window.innerHeight;

    return(
        
        <motion.div className='titulo' style={{backgroundColor: props.corcomplementar}}
        animate={{opacity: 1, height: altura,}}
        transition={{delay: 0.5, duration:1}}
        initial={{opacity: 0, height:'0'}}
        >{props.Nome}</motion.div>
        
    )
}
export default Titulo