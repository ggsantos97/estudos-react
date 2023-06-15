import Banner from 'components/Banner';
import styles from './Player.module.css'
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json';

function Player() {
    const params = useParams();
    const video = videos.find((video) => {
        return video.id === Number(params.id);
    });
    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                    <iframe
                      width="560"
                      height="400"
                      src={video.link}
                      title={video.titulo}
                      
                    ></iframe>
            </section>

        </>
    )
}

export default Player;