import './Social.css';
import '../../Mobile.css';
import '../internas.css';
import { motion } from 'framer-motion';
import Titulo from '../Structurals/titulo';

const Tx = () => {

    return (
        <>
        <Titulo corcomplementar="#750000" Nome="Transplantado"/>
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
            Nesta área, será inserida uma grande quantidade de conteúdo relacionado ao meu transplante de fígado realizado em 21/05/21
           .<br />
           Ainda no hospital, dei início a um trabalho voluntário que levarei até os últimos dias com todo o amor e gratidão.
           <br />
           <br />
           Esta área está em construção. 
        </motion.div>
        </>
    )
}
export default Tx