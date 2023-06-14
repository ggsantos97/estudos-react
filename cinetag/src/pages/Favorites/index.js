import Banner from 'components/Banner';
import styles from './Favorites.module.css'
import Title from 'components/Title';
import Card from 'components/Card';
import { useFavoriteContext } from 'contexts/Favorites';
function Favorites() {
    const {favorite} = useFavoriteContext();
    return (
        <>
            <Banner imagem="favorites"></Banner>
            <Title >
                <h1>Filmes Favoritos!</h1>
            </Title>
            <section className={styles.container}>
                {favorite.map((favorite) => {
                    return <Card {...favorite} key={favorite.id} />
                })}
            </section>
        </>
    )
}

export default Favorites