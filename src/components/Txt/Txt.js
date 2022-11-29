import './Txt.css';
import '../internas.css';
import { motion } from 'framer-motion';

const Txt = () => {

    return (
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
            WRITTER
        </motion.div>
    )
}
export default Txt