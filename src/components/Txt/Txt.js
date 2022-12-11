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
            Sou um escritor em desenvolvimento, com dois livros em vias de publicação.
            <br /><br />
           <br />
           Esta área está em construção.
        </motion.div>
        </>
    )
}
export default Txt