import './Social.css';
import '../internas.css';
import { motion } from 'framer-motion';
import Titulo from '../Structurals/Titulo';

const Tx = () => {

    return (
        <>
        <Titulo corcomplementar="#750000" Nome="Transplantado"/>
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
            Transplantado
        </motion.div>
        </>
    )
}
export default Tx