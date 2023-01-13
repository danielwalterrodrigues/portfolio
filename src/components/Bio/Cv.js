import './Bio.css';
import './imprimir.css';
import '../internas.css';
import '../../Mobile.css';
import { motion } from 'framer-motion';
import Texto from './texto.js';
import Titulo from '../Structurals/titulo';
import Imprimir from './Imprimir';


const Cv = () => {
      
      return (
        <>
        <div>
        <Titulo corcomplementar="#333333" Nome="Curriculum Vitae" />
        <motion.div className="brancoGeral" id='container'
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
           
            <Imprimir />
            
           
        </motion.div>
        </div>
        </>

      );
}
export default Cv
