import React from 'react';
import '../Mobile.css';
import { useState } from 'react';
import './imprimir.css';
import logoCurriculum from '../../assets/logo_curriculum.png';
import xlaranja from '../../assets/xlaranja.png';
import printIcon from '../../assets/ico_printer.png';
import editorIcon from '../../assets/ico_editor.png';
import fecharIcon from '../../assets/ico_fechar.png';
import { motion } from 'framer-motion';
import Voltar from '../../assets/voltar2.png';

  
const Imprimir = () => {
    const [printJanela, abrePrintJanela] = useState(true);
    const Print = () =>{
        let printContents = document.getElementById('imprimediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
       document.body.innerHTML = originalContents; 
      }

    const refreshPage = ()=>{
        abrePrintJanela(false);
    }
    
    return(
        
        <>
        {printJanela && (
            <>
        <div className="Utils">
            <a onClick={Print} className='naoeditar'><img src={editorIcon} className='impressora'></img></a>
            <a onClick={Print} className='naoimprimir'><img src={printIcon} className='impressora'></img></a>
            <button onClick={refreshPage} className="naoimpprimirvolta">
                <img src={fecharIcon}></img>    
            </button>
        </div>
        
        <motion.div id="imprimediv" className='curriculumVitae' 
                    animate={{opacity: 1}}
                    transition={{delay:0, duration: 1.5}}
                    initial={{opacity: 0}}>
            <div className='Header'>
                <div className='HeaderEsq'>
                    <img src={logoCurriculum} alt="logo do curriculum"></img>
                </div>
                <div className='HeaderDir'>
                </div>
            </div>
            <div className='Corpo'>
            <h2>Profissional de TI - React Native</h2>
                <div class='sessao'>
                    <h3>Dados Pessoais</h3>
                    <div className='sessaoInt'>
                        Daniel Walter Rodrigues<br />
                        Brasileiro<br />
                        Casado<br />
                        Travessa Dom Jo??o VI, 5 - Vila Imp??rio - S??o Paulo SP<br />
                        <span className='textoLaranja'>linkedin.com/in/danielrodrigues</span><br />
                        <span className='textoLaranja'>github.com/danielwalterrodrigues</span>
                    </div>
                    <div className='sessaoInt'>
                        11 95367 0683<br />
                        06/05/1977<br />
                        218.290.308-92<br />
                        04406-210<br />
                        <span className='textoLaranja'>danielwalterrodrigues@gmail.com</span><br />
                        <span className='textoLaranja'>play.google.com/store/apps/details?id=com.apptarotmagia.app</span>
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Apresenta????o</h3>
                    <p>Desde 1997, venho me dedicando exclusivamente a projetos de desenvolvimento web, e com isso, participando ativamente de projetos para empresas como Nethoes, Intel, InCor, Vale, entre outros. O largo per??odo de experi??ncia e consequentemente, os cargos que ocupei me permitiram enxergar o projeto como um todo, sob a ??tica do webdesigner, do programador, gestor das equipes, bem como gestor geral e at?? o idealizador em si. </p>

                    <p>Dentre as caracter??sticas que me levaram a fazer parte de empresas como Netshoes, Asus, Shop2gether e E-Smart, entre outras, posso destacar:</p>

                    - L??der por natureza, motivando e inspirando;<br />
                    - Habilidade em recrutar e manter times de ponta em TI;<br />
                    - Facilidade para aprender e lidar com as demais ferramentas e linguagens de programa????o;<br />
                    - Criatividade e pr??-atividade;<br />
                    - Habilidade de comunica????o com qualquer escala hier??rquica;<br />
                    - Experi??ncia e viv??ncia em diferentes ??reas de um projeto para a web, seja no planejamento, design, programa????o ou recrutamento e gest??o de times de TI;
                </div>
                <div class='sessao'>
                    <h3>Forma????o</h3>
                    <span className='textoLaranja'>Universidade Anhembi Morumbi</span><br />
                    Design Digital<br />
                    1997 - 2000 (incompleto)
                </div>
                <div class='sessao'>
                    <h3>Experi??ncias</h3>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2015 - 2020</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Consultor Magento<br />
                        Consultor independente
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2013 - 2014</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Gerente de e-commerce<br />
                        Asus Brasil
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2011 - 2013</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Gerente de projetos<br />
                        E-Smart
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2010 - 2010</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Gerente de e-commerce<br />
                        Netshoes
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2004 - 2010</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        S??cio diretor<br />
                        Energy Interactive
                    </div>
                </div>

                <div class='sessao'>
                    <h3>Compet??ncias</h3>
                    <div className='sessaoInt'>
                        Design UX/UI<br />
                        <div className='barraFundo'>
                            <div style={{height: 10,width: '90%', float: 'left', }}><img src={xlaranja} className='xlaranja' height={'10'} width={'100%'}></img></div>
                        </div>
                        React Native / JS<br />
                        <div className='barraFundo'>
                            <div style={{ backgroundColor:'#747474', height: 10,width: '50%', }}><img src={xlaranja} className='xlaranja' height={'10'} width={'100%'}></img></div>
                        </div>
                        Magento<br />
                        <div className='barraFundo'>
                            <div style={{ backgroundColor:'#747474', height: 10,width: '100%', }}><img src={xlaranja} className='xlaranja' height={'10'} width={'100%'}></img></div>
                        </div>
                        PHP 7<br />
                        <div className='barraFundo'>
                            <div style={{ backgroundColor:'#747474', height: 10,width: '75%', }}><img src={xlaranja} className='xlaranja' height={'10'} width={'100%'}></img></div>
                        </div>
                    </div>
                    <div className='sessaoInt'>
                        HTML5<br />
                        <div className='barraFundo'>
                            <div style={{ backgroundColor:'#747474', height: 10,width: '50%', }}><img src={xlaranja} className='xlaranja' height={'10'} width={'100%'}></img></div>
                        </div>
                        Gest??o ??gil<br />
                        <div className='barraFundo'>
                            <div style={{ backgroundColor:'#747474', height: 10,width: '50%', }}><img src={xlaranja} className='xlaranja' height={'10'} width={'100%'}></img></div>
                        </div>
                        CSS3<br />
                        <div className='barraFundo'>
                            <div style={{ backgroundColor:'#747474', height: 10,width: '70%', }}><img src={xlaranja} className='xlaranja' height={'10'} width={'100%'}></img></div>
                        </div>
                        Idioma Ingl??s<br />
                        <div className='barraFundo'>
                            <div style={{ backgroundColor:'#747474', height: 10,width: '75%', }}><img src={xlaranja} className='xlaranja' height={'10'} width={'100%'}></img></div>
                        </div>
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Cursos Extra Curriculares</h3>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>Junho 2006</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Gest??o de Projetos<br />
                        UFSC - Universidade Federal de S??o Carlos
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>Atual</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Programa????o Orientada a Objetos<br />
                        USP - Universidade de S??o Paulo
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Conquistas</h3>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2000</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Pr??mio iBest - Categoria Melhor Site Governamental<br />
                        Governo Federal - Programa Alfabetiza????o Solid??ria
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Atividades Filantr??picas</h3>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2005</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Casa Limiar<br />
                        Respons??vel TI (website, infraestrutura e treinamento b??sico)
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2021 / Atual</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Transplantado<br />
                        Projeto sem fins lucrativos que presta suporte a fam??lias e doentes em fila de transplantes, e dissemina informa????es sobre o universo dos transplantes e a import??ncia da doa????o de ??rg??os.
                    </div>
                </div>
            </div>
        </motion.div>
       </> ) }      
        </>
        
    )
};
  
export default Imprimir;
