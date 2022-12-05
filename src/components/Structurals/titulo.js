import { motion } from "framer-motion";
import './Titulo.css';


const Titulo = (props) => {

    return(
        
        <motion.div className='titulo' style={{backgroundColor: props.corcomplementar}}
        animate={{opacity: 1, height: '100vh',}}
        transition={{delay: 0.5, duration:1}}
        initial={{opacity: 0, height:'0'}}
        >{props.Nome}</motion.div>
        
    )
}
export default Titulo