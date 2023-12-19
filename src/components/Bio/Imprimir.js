import React from 'react';
import { useState } from 'react';
import './imprimir.css';
import xlaranja from '../../assets/xlaranja.png';
import printIcon from '../../assets/cv_imprimir.png';
import { motion } from 'framer-motion';
import Tags from './tags';

  
const Imprimir = () => {
    const [printJanela, abrePrintJanela] = useState(true);
    const Print = () =>{
        let printContents = document.getElementById('imprimediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
       document.body.innerHTML = originalContents; 
      }

    
    return(
        
        <>
        {printJanela && (
            <>
        <div className="Utils" style={{display: 'none'}}>
            <a onClick={Print}><img src={printIcon} className='imagens'></img></a>
        </div>
        
        <motion.div id="imprimediv" className='curriculumVitae' 
                    animate={{opacity: 1}}
                    transition={{delay:0, duration: 1.5}}
                    initial={{opacity: 0}}>
            {/* <div className='Header'>
                <div className='HeaderEsq'>
                    <img src={logoCurriculum} alt="logo do curriculum"></img>
                </div>
                <div className='HeaderDir'>
                </div>
            </div>
        */}
            <div className='Corpo'>
            <h2>Profissional de TI - Programador React Pleno</h2>
                <div class='sessao'>
                    <h3>Dados Pessoais</h3>
                    <div className='sessaoInt'>
                        Daniel Walter Rodrigues<br />
                        Brasileiro<br />
                        Casado<br />
                        Travessa Dom João VI, 5 - Vila Império - São Paulo SP<br />
                        <span className='textoLaranja'>linkedin.com/in/danielrodrigues</span><br />
                        <span className='textoLaranja'>github.com/danielwalterrodrigues</span>
                    </div>
                    <div className='sessaoInt'>
                        11 95367 0683<br />
                        06/05/1977<br />
                        218.290.308-92<br />
                        04406-210<br />
                        <span className='textoLaranja'>danielwalterrodrigues@gmail.com</span><br />
                        <span className='textoLaranja'>play.google.com/store/apps/details?id=com.apptarotmagia.app</span><br />
                        <span className='textoLaranja'>www.portfoliodanielrodrigues.com.br</span>
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Apresentação</h3>
                    <p>Desde 1997, venho me dedicando exclusivamente a projetos de desenvolvimento web, e com isso, participando ativamente de projetos para empresas como Nethoes, Intel, InCor, Vale, entre outros. O largo período de experiência e consequentemente, os cargos que ocupei me permitiram enxergar o projeto como um todo, sob a ótica do webdesigner, do programador, gestor das equipes, bem como gestor geral e até o idealizador em si. </p>

                    <p>Dentre as características que me levaram a fazer parte de empresas como Netshoes, Asus, Shop2gether e E-Smart, entre outras, posso destacar:</p>

                    - Líder por natureza, motivando e inspirando;<br />
                    - Habilidade em recrutar e manter times de ponta em TI;<br />
                    - Facilidade para aprender e lidar com as demais ferramentas e linguagens de programação;<br />
                    - Criatividade e pró-atividade;<br />
                    - Habilidade de comunicação com qualquer escala hierárquica;<br />
                    - Experiência e vivência em diferentes áreas de um projeto para a web, seja no planejamento, design, programação ou recrutamento e gestão de times de TI;
                </div>
                <div class='sessao'>
                    <h3>Formação</h3>
                    <span className='textoLaranja'>Universidade Anhanguera</span><br />
                    Superior de Tecnologia em Desenvolvimento Mobile<br />
                    2023 - atual.
                    <br /><br />
                    <span className='textoLaranja'>Universidade Anhembi Morumbi</span><br />
                    Design Digital<br />
                    1997 - 2000.
                </div>
                <div class='sessao'>
                    <h3>Idiomas</h3>
                    <span className='textoLaranja'>Inglês</span><br />
                    Avançado.
                </div>
                <div class='sessao'>
                    <h3>Experiências</h3>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>mar 2023 - out 2023</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        React-Native Software Engineer<br />
                        Vyttra Diagnósticos
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2015 - 2022</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Consultor Magento / React Native<br />
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
                        <span className='textoLaranja'>2012 - 2013</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Gerente de projetos<br />
                        E-Smart
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2010 - 2011</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Gerente de TI<br />
                        Moda Hoje - Shop2gether
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
                        Sócio diretor<br />
                        Energy Interactive
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2002 - 2004</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Webdesigner<br />
                        Radium Systems
                    </div>

                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2000 - 2002</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Webdesigner<br />
                        Fulano / F.Biz
                    </div>

                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>1998 - 2000</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Webdesigner<br />
                        CDN - Companhia de Notícias
                    </div>

                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>1997 - 1998</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Estagiário de webdesign<br />
                        Universidade Anhembi Morumbi
                    </div>
                </div>

                <div class='sessao'>
                    {/* <Tags /> */}
                </div>
                <div class='sessao'>
                    <h3>Cursos Extra Curriculares</h3>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>Junho 2006</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Gestão de Projetos<br />
                        UFSC - Universidade Federal de São Carlos
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2022 - Incompleto</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Programação Orientada a Objetos<br />
                        USP - Universidade de São Paulo
                    </div>

                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2023 - Atual</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Criação de Startups: Como desenvolver negócios inovadores<br />
                        USP - Universidade de São Paulo
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Conquistas</h3>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2000</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Prêmio iBest - Categoria Melhor Site Governamental<br />
                        Governo Federal - Programa Alfabetização Solidária
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Atividades Filantrópicas</h3>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2005 - 2010</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Casa Limiar<br />
                        Responsável TI (website, infraestrutura e treinamento básico)
                    </div>
                    <div className='sessaoPeqEsq'>
                        <span className='textoLaranja'>2021 / Atual</span>
                    </div>
                    <div className='sessaoPeqDir'>
                        Transplantado<br />
                        Projeto sem fins lucrativos que presta suporte a famílias e doentes em fila de transplantes, e dissemina informações sobre o universo dos transplantes e a importância da doação de órgãos.
                    </div>
                </div>
                <br /><br /><br /><br />
            </div>
        </motion.div>
       </> ) }      
        </>
        
    )
};
  
export default Imprimir;
