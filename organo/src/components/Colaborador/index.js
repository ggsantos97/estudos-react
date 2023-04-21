import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css'

const Colaborador = ({colaborador,corDeFundo, aoDeletar}) => {

    return (<div className='colaborador'>
         <AiFillCloseCircle style={{cursor: 'pointer'}}
            size={25} className="deletar" 
            onClick={() => aoDeletar(colaborador.id)} 
        />
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <a href={colaborador.github} ><h4>{colaborador.nome}</h4></a>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador