import './Txt.css';
import '../internas.css';
import '../../Mobile.css';
import { motion } from 'framer-motion';
import Titulo from '../Structurals/titulo';

const Txt = () => {

    return (
        <>
        <Titulo corcomplementar="#bde20f" Nome="textos, contos e afins"/>
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'0', opacity: 0}}>
            WRITTER
        </motion.div>
        </>
    )
}
export default Txt