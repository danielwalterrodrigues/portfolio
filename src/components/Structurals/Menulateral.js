import './Menulateral.css';
import curvaevirgula from '../../assets/curvaevirgula.png';
import sombra from '../../assets/sombra_menu.png';
import Menuitem from './MenuItem';

const Menulateral = () => {

    const rand = 0 + Math.random() * (999 - 0);

    return(
        <>
            <div className='Barra'>
                <div className='headerBarra'>
                    <img src={curvaevirgula}></img>
                </div>
                <Menuitem Leg=".Bio" Cor="#ff8a00" Hover="Biografia" Nome="BIOGRAFIA" corcomplementar='#ff6c00' key={rand + 1} />
                <Menuitem Leg=".Dev" Cor="#9e00e0" Hover="Desenvolvimento" Nome="DESENVOLVIMENTO" corcomplementar='#440062'  key={rand + 2} />
                <Menuitem Leg=".Txt" Cor="#84c900" Hover="Escrever é libertar o peso da alma" Nome="TEXTOS E AFINS" corcomplementar='#b5f100'  key={rand + 3} />
                <div className='separador'></div>
                <Menuitem Leg=".Tx" Cor="#750000" Hover="Projeto Transplantado" Mario='true' Nome="PROJETO TRANSPLANTADO" corcomplementar='#750000' key={rand + 4} />
                <div className='separador'></div>
            </div>
            <div className='sombra'>
                <img src={sombra}></img>
            </div>
        </>
    )
}
export default Menulateral