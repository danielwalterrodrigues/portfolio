import React, { button, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Draggable } from 'drag-react';
import InputMask from 'react-input-mask';
import { db } from '../../firebase';
import { doc, addDoc, collection } from "firebase/firestore";
import Wait from "../Structurals/wait";
import '../Structurals/barraBotosmenores.css';
import './whatsapp.css';
import '.././../Mobile.css';
import whatsapp1 from '../../assets/ico_whatsapp1.png';
import whatsapp2 from '../../assets/ico_whatsapp2.png';
import BlocoMsg from "./BlocoMsg";
import whatsappLoguinho from '../../assets/whatsLoguinho.png';
import whatsappEnvia from '../../assets/whatsEnvia.png';
import seuMadruga from '../../assets/madruga.gif';

function PhoneInput(props) {
    return (
      <InputMask className='whatsInput'
        mask='+55 99 99999 9999' 
        value={props.value} 
        onChange={props.onChange}>
      </InputMask>
    );
  }

const Whatsapp = () => {
    const [aberto, setAberto] = useState(false);
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputFoneValue, setInputFoneValue] = useState('');
    const [inputMensagemValue, setInputMensagemValue] = useState('');
    const [intOne, setIntOne] = useState(false);
    const [intTwo, setIntTwo] = useState(false);
    const [intThree, setIntThree] = useState(false);
    const [intFour, setIntFour] = useState(false);
    const [intFive, setIntFive] = useState(false);
    const [intSix, setIntSix] = useState(false);
    const [aguardeOne, setAguardeOne] = useState(true);
    const [aguardeTwo, setAguardeTwo] = useState(false);
    const [aguardeThree, setAguardeThree] = useState(false);
    const [aguardeFour, setAguardeFour] = useState(false);
    const [aguardeFive, setAguardeFive] = useState(false);
    const [stepOneCampos, setStepOneCampos] = useState(true);
    const [stepTwoCampos, setStepTwoCampos] = useState(false);
    const [stepThreeCampos, setStepThreeCampos] = useState(false);
    const [madruga, setMadruga] = useState(false);

    useEffect(()=>{
        setTimeout(() => {const box2 = document.getElementById('box2');
        box2.style.display = 'block';
        setAguardeOne(false)
        }, 3000);
        
    })

    function StepOne() {
        setIntOne(true);
        setStepOneCampos(false);
        setStepTwoCampos(true);
        setTimeout(() => {setAguardeTwo(true)}, 1000);
        setTimeout(() => {setAguardeTwo(false)}, 3000);
        setTimeout(() => {setIntTwo(true)}, 3000);
    }

    function StepTwo() {
        setIntTwo(true);
        setStepTwoCampos(false);
        setStepThreeCampos(true);
        setIntThree(true);
        setTimeout(() => {setAguardeThree(true)}, 1000);
        setTimeout(() => {setAguardeThree(false)}, 3000);
        setTimeout(() => {setIntFour(true)}, 3000);
        setTimeout(() => {setAguardeFour(true)}, 4000);
        setTimeout(() => {setAguardeFour(false)}, 6000);
        setTimeout(() => {setIntFive(true)}, 6000);
    }
    
    async function GravaDados() {
        const agora = Date.now();
        setIntSix(true);
        setTimeout(() => {setAguardeFive(true)}, 1000);
        setTimeout(() => {setAguardeFive(false)}, 3000);
        setTimeout(() => {setMadruga(true)}, 3000);
        await addDoc(collection(db, "Contatos"), {
            Data: agora,
            key: agora,
            Vizualizado: 0,
            Nome: inputNameValue,
            Mensagem: inputMensagemValue,
            Whatsapp: inputFoneValue
          });
     }

    const onNome = event => {
        setInputNameValue(event.target.value);
     };
     const onFone = event => {
         setInputFoneValue(event.target.value);
     };
     const onMensagem = event => {
         setInputMensagemValue(event.target.value);
     };

    return(
    <>
        {aberto ? 
        
            <>
                <button onClick={()=>setAberto(false)} className='botoesMenores'>
                    <img src={whatsapp2}></img>
                </button>
                    <Draggable>
                        <div className="whatsapp">
                            <div className="barraTop">
                                <div className="barraTopEsq"><img src={whatsappLoguinho}></img></div>
                                <div className="barraTopCentro">+ 55 11 95367 0683</div>
                                <div className="barraTopDir" onClick={()=>setAberto(false)}>X</div>
                            </div>
                            <div className="WhatsContent">
                                
                                <motion.div style={{width:'100%'}}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                >
                                    <BlocoMsg person='0' texto='Oi, tudo bem? Obrigado pela sua visita!
                                    Este chat é uma maneira bem rápida de entrarmos em contato.' />
                                </motion.div>
                                {aguardeOne &&
                                <motion.div style={{
                                        width: '100%', 
                                        height:5, 
                                        justifyContent: 'center', alignItems: 'flex-top', 
                                        marginBottom: 55, marginTop: '-20px', 
                                        scale: '70%', 
                                        color: '#666666'}}

                                        initial={{ opacity:0  }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        exit={{ opacity: 0 }}
                                >
                                    <Wait />
                                </motion.div>
                                }
                                
                                <div id='box2' style={{width:'100%', display: 'none'}}>
                                    <BlocoMsg person='0' texto={'Para começarmos bem...\nQual o seu nome?'} />
                                </div>
                            
                                {intOne && 
                                    <div style={{width:'100%',}}>
                                        <BlocoMsg person='1' texto={inputNameValue} />
                                    </div>
                                }
                                
                                {aguardeTwo &&
                                <motion.div style={{
                                        width: '100%', 
                                        height:5, 
                                        justifyContent: 'center', alignItems: 'flex-top', 
                                        marginBottom: 55, marginTop: '-20px', 
                                        scale: '70%', 
                                        color: '#666666'}}

                                        initial={{ opacity:0  }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        exit={{ opacity: 0 }}
                                >
                                    <Wait />
                                </motion.div>
                                }
                                {intTwo && 
                                    <div style={{width:'100%',}}>
                                        <BlocoMsg person='0' texto={inputNameValue+', me passa o número do seu Whatsapp? Assim eu já te adiciono..'} />
                                    </div>
                                }
                                {intThree && 
                                    <div style={{width:'100%',}}>
                                        <BlocoMsg person='1' texto={inputFoneValue} />
                                    </div>
                                }

                                {aguardeThree &&
                                <motion.div style={{
                                        width: '100%', 
                                        height:5, 
                                        justifyContent: 'center', alignItems: 'flex-top', 
                                        marginBottom: 55, marginTop: '-20px', 
                                        scale: '70%', 
                                        color: '#666666'}}

                                        initial={{ opacity:0  }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        exit={{ opacity: 0 }}
                                >
                                    <Wait />
                                </motion.div>
                                }
                                {intFour && 
                                    <div style={{width:'100%',}}>
                                        <BlocoMsg person='0' texto={'Obrigado! Bom, diga lá.. No que posso ajudar? Ah! Antes, deixa eu te explicar uma coisa...'} />
                                    </div>
                                }
                            
                                {aguardeFour &&
                                <motion.div style={{
                                        width: '100%', 
                                        height:5, 
                                        justifyContent: 'center', alignItems: 'flex-top', 
                                        marginBottom: 55, marginTop: '-20px', 
                                        scale: '70%', 
                                        color: '#666666'}}

                                        initial={{ opacity:0  }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        exit={{ opacity: 0 }}
                                >
                                    <Wait />
                                </motion.div>
                                }
                                {intFive && 
                                    <div style={{width:'100%',}}>
                                        <BlocoMsg person='0' 
                                            texto='Assim que você mandar esta mensagem, meu celular vai abrir um aviso. Assim mesmo, 
                                            em tempo real, através de um app que criei só pra facilitar o nosso contato. 
                                            Assim que receber a notificação, eu te chamo no Whats pra continuarmos essa conversa. 
                                            Costumo ser bem rapidinho nisso :-)' />
                                    </div>
                                }
                                {intSix && 
                                    <div style={{width:'100%',}}>
                                        <BlocoMsg person='1' texto={inputMensagemValue} />
                                    </div>
                                }{aguardeFive &&
                                    <motion.div style={{
                                            width: '100%', 
                                            height:5, 
                                            justifyContent: 'center', alignItems: 'flex-top', 
                                            marginBottom: 55, marginTop: '-20px', 
                                            scale: '70%', 
                                            color: '#666666'}}
    
                                            initial={{ opacity:0  }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1 }}
                                            exit={{ opacity: 0 }}
                                    >
                                        <Wait />
                                    </motion.div>
                                    }
                                {madruga && 
                                    <div style={{width:'100%',}}>
                                        <img src={seuMadruga} style={{marginLeft: 'calc(50% - 100px)', width: '200px', height: 'auto' }}></img>
                                        <BlocoMsg person='0' texto='Ops! Celular acabou de vibrar kkkk. Eu entro em contato assim que puder, ok? Obrigado e até daqui a pouco!' />
                                    </div>
                                }
                            
                                {stepOneCampos && 
                                    <div className="barraBaixo">
                                        <div className='barraBaixoEsq'>
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={onNome}
                                                value={inputNameValue}
                                                placeholder="Digite seu nome..." 
                                                className="whatsInput" />            
                                        </div>
                                        <div className='barraBaixoDir'><img src={whatsappEnvia} onClick={StepOne}></img></div>
                                    </div>
                                }
                                {stepTwoCampos && 
                                    <div className="barraBaixo">
                                        <div className='barraBaixoEsq'>
                                            <PhoneInput 
                                                type="text"
                                                name="fone"
                                                onChange={onFone}
                                                placeholder="+55 xx xxxxx xxxx"
                                                value={inputFoneValue}
                                                className="whatsInput" />            
                                        </div>
                                        <div className='barraBaixoDir'><img src={whatsappEnvia} onClick={StepTwo}></img></div>
                                    </div>
                                }

                                {stepThreeCampos && 
                                    <div className="barraBaixo">
                                        
                                        <>
                                            <div className='barraBaixoEsq'>
                                            {madruga ? null :
                                                <input
                                                    type="text"
                                                    name="mensagem"
                                                    onChange={onMensagem}
                                                    value={inputMensagemValue}
                                                    placeholder="Digite alguma coisa..." 
                                                    className="whatsInput" />            
                                            }
                                            </div>
                                            <div className='barraBaixoDir'>
                                            {madruga ? null : <img src={whatsappEnvia} onClick={GravaDados}></img>}</div>
                                        </>
                                        
                                    </div>
                                }

                                
                            </div>
                        </div>
                    </Draggable>                
            </>
            : 
                <button onClick={()=>setAberto(true)} className='botoesMenores'>
                    {aberto ? null : <div className='tooltip'>1</div>}
                    <img src={whatsapp1}></img>
                </button>
        }       
    </>
    )
}
export default Whatsapp