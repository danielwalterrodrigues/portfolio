import React, { useEffect, useState } from "react";
import './imprimir.css'
import cvLogo from '../../assets/cvLogoNew.png'
import { isMobile } from "react-device-detect";


const Curriculo = () => {
    const [mobile, setMobile] = useState(false)

    useEffect(()=>{
        if (isMobile) {
            setMobile(true)
        }
    }, [])

    return(
        <>
        <div className={mobile ? 'CorpoMobile' : 'Corpo'}>
            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                    <img src={cvLogo} />
                </div>
            </div>
            <h2>Profissional de TI - Programador React Pleno</h2>
                <div class='sessao'>
                    <h3>Dados Pessoais</h3>
                    <div className={mobile ? 'sessaoIntMobile' : 'sessaoInt'}>
                        Daniel Walter Rodrigues<br />
                        Brasileiro<br />
                        Casado<br />
                        <span className='textoLaranja'>linkedin.com/in/danielrodrigues</span>
                    </div>
                    <div className='sessaoInt'>
                        11 95367 0683<br />
                        06/05/1977<br />
                        <span className='textoLaranja'>danielwalterrodrigues@gmail.com</span><br />
                        <span className='textoLaranja'>www.portfoliodanielrodrigues.com.br</span>
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Apresentação</h3>
                    <p>Profissional com larga experiência, conhecedor de todos os processos de um projeto de tecnologia, desde o processo comercial, modelo de negócio, desenvolvimento de software e pós-lançamento. Desbravador do mercado de desenvolvimento web brasileiro, ocupou diferentes cargos em renomadas empresas nacionais e multinacionais ao longo de uma trajetória de mais de 25 anos no mercado de TI.</p>

                    - Líder por natureza, motivando e inspirando;<br />
                    - Facilidade para aprender e lidar com as demais ferramentas e linguagens de programação;<br />
                    - Criatividade e pró-atividade;<br />
                    - Notável habilidade na comunicação escrita e falada.<br />
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
                    Avançado
                </div>
                <div class='sessao'>
                    <h3>Experiências</h3>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2023</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        React-Native Software Engineer<br />
                        Vyttra Diagnósticos
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2015 - 2022</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Consultor Magento / React Native<br />
                        Consultor independente
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2013 - 2014</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Gerente de e-commerce<br />
                        Asus Brasil
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2012 - 2013</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Gerente de projetos<br />
                        E-Smart
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2010 - 2011</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Gerente de TI<br />
                        Moda Hoje - Shop2gether
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2010 - 2010</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Gerente de e-commerce<br />
                        Netshoes
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2004 - 2010</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Sócio diretor<br />
                        Energy Interactive
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2002 - 2004</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Webdesigner<br />
                        Radium Systems
                    </div>

                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2000 - 2002</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Webdesigner<br />
                        Fulano / F.Biz
                    </div>

                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>1998 - 2000</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Webdesigner<br />
                        CDN - Companhia de Notícias
                    </div>

                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>1997 - 1998</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Estagiário de webdesign<br />
                        Universidade Anhembi Morumbi
                    </div>
                </div>

               {/* <div class='sessao'>
                        <Tags />
                    </div>
                */}
                <div class='sessao'>
                    <h3>Cursos Extra Curriculares</h3>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>Atual</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                    Fazendo aplicativos com NodeMCU(esp8266) e React Native<br />
                        Udemy
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2023</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Programação Orientada a Objetos<br />
                        Coursera / USP - Universidade de São Paulo
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2006</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Gestão de Projetos<br />
                        UFSC - Universidade Federal de São Carlos
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Conquistas</h3>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2000</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Prêmio iBest - Categoria Melhor Site Governamental<br />
                        Governo Federal - Programa Alfabetização Solidária
                    </div>
                </div>
                <div class='sessao'>
                    <h3>Atividades Filantrópicas</h3>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>2005</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'}>
                        Casa Limiar<br />
                        Responsável TI.
                    </div>
                    <div className={mobile ? 'sessaoPeqEsqMobile' : 'sessaoPeqEsq'}>
                        <span className='textoLaranja'>Atual</span>
                    </div>
                    <div className={mobile ? 'sessaoPeqDirMobile' : 'sessaoPeqDir'} style={{height:200}}>
                        Transplantado<br />
                        Projeto sem fins lucrativos que presta suporte a famílias e doentes em fila de transplantes, e dissemina informações sobre o universo dos transplantes e a importância da doação de órgãos.
                    </div>
                </div>
                <br /><br /><br /><br />
            </div>
            </>
    )
}
export default Curriculo