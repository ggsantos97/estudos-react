import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames'
type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number|null>>;
}
export default function Filtros({filtro, setFiltro}: Props) {

    function selecionarFiltro(item: IOpcao) {
        if(filtro === item.id) return setFiltro(null);
            return setFiltro(item.id)
    }
    return <div className={styles.filtros}>
        {filtros.map((item) => (
            <button key={item.id} 
            onClick={() => selecionarFiltro(item)}
            className={classNames({
                [styles.filtros__filtro]: true,
                [styles['filtros__filtro--ativo']]: filtro === item.id
              })} >
                    {item.label}
            </button>
        ))}
    </div>;
} 