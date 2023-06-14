import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import videos from 'json/db.json';
import styles from './home.module.css'
function Home() {
    return (
        <>

            <Banner imagem="home"></Banner>
            <Title >
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>


        </>

    )
}

export default Home;