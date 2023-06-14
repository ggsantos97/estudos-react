import { useFavoriteContext } from 'contexts/Favorites';
import styles from './Card.module.css';
import iconFavorite from './favorite.png';
import iconNotFavorite from './favorite_outline.png';

function Card({ id,  titulo, capa }) {
    const {favorite, addfavorite} = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? iconNotFavorite : iconFavorite;
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.cover} />
            <h2>{titulo}</h2>
            <img src={icon}
                alt="Favoritar filme"
                className={styles.favorite} 
                onClick={()=> {addfavorite({id, titulo, capa})}}/>
        </div>
    )
}

export default Card;