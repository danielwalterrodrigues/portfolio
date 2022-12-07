import './Bio.css';
import '../internas.css';
import '../../Mobile.css';
import { motion } from 'framer-motion';
import Texto from './texto.js';
import Titulo from '../Structurals/titulo';
import aspas1 from '../../assets/aspas1.png';
import aspas2 from '../../assets/aspas2.png';


const Bio = () => {
      
      return (
        <>
        <div>
        <Titulo corcomplementar="#ff6c00" Nome="Biografia" />
        <motion.div className="brancoGeral" id='container'
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
           
            <div className='aspas' style={{float: 'left', marginRight: 15, marginTop: -20}}><img src={aspas1} className='aspasimg'></img></div>
            <div style={{maxWidth: 'calc(90vw - 130px)', marginLeft: 45}}>
              <div style={{fontSize: 25, color: '#000', fontFamily: 'Gill Sans', marginBottom: 20}}>Profissional em metamorfose.</div>
              <div style={{color: '#000000', marginBottom:20, fontSize:15}}><i>Não. Este, definitivamente, não é o portfolio de um programador convencional. Claro que há portfolios e programadores melhores do que eu. Mas procurei, aqui, expor algo mais do que apenas os meus trabalhos, experiências e o mesmo bla bla bla de sempre.<br />
              Estamos aqui para falar de <b>VIDA</b>.</i></div>
              <div className='textocolunas'>
              <p>Este também é um repositório de experiências, de aprendizado, de erros e acertos, mas também - e principalmente de um profissional em pleno processo de reconstrução pessoal.</p>

              <p>Eu explico: Sou nascido no longínquo ano de 1977. E antes dos 20 anos de idade, já trabalhava profissionalmente com a novidade do momento: a internet.</p>

              <p>Fascinado pelas artes e buscando sempre a melhor maneira de uní-las à criação de interfaces, estudei Design Digital na Universidade Anhembi Morumbi, onde logo consegui meu primeiro estágio.</p>

              <p>Nos anos que se passaram, flertei com todas as tecnologias que o advento da internet vinha nos apresentando. Inicialmente HTML, depois CSS, os primeiros scripts em JavaScript, e o início dos frameworks, ainda chamados CMSs. Drupal, Joomla, Wordpress.</p>

              <p>Empreendi, fui o orgulhoso sócio da Energy Interactive que, durante 6 anos, me trouxe a responsabilidade de trazer, sob o meu CNPJ, várias CLTs e uma experiência gratificante e engrandecedora, do ponto de vista profissional.</p>

              <p>O mundo do e-commerce, então, se motrou sedutor, e após o fim da Energy me levou a cargos de gestão de times incríveis em empresas como Netshoes, Asus e E-Smart, 
              posteriormente adquirida pela B2W.</p>

              <p>Sem nunca perder o viés artístico e buscando reunir conhecimento técnico à sensibilidade e experiência de usuário (UX), tornei-me altamente especializado na ferramenta Magento.</p>

              <p>A compra da ferramenta pela gigante Adobe, as mudanças de rumo propostas pela nova proprietária da ferramenta e um longo hiato na minha carreira devido a um grave - e totalmente 
              superado - problema de saúde me trouxeram a uma reflexão sobre os rumos a serem (re)tomados na minha carreira e após muitos estudos e experimentos, reencontrei no 
              desenvolvimento de Apps o prazer e a força para me lançar ao mar mais uma vez.</p>

              <p>Estudei e estudo com afinco, migrei o conhecimento de outrora e aqui estou: Buscando a reconexão com minhas raízes numa nova paixão chamada React Native.</p>
              </div>
              <div className='aspas' style={{float: 'right', marginLeft: 15, marginTop: 20}}><img src={aspas2} className='aspasimg'></img></div>
            </div>
            
           
        </motion.div>
        </div>
        </>

      );
}
export default Bio
