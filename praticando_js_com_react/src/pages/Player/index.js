import { Fragment, useEffect, useState } from 'react';
import styles from './Player.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrado from 'pages/NaoEncontrado';

const Player = () => {
    const [video, setVideo] = useState();
    const params = useParams();


    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Pedro-Louzada/api-vendas/videos?id=${params.id}`)
            .then(response => response.json())
            .then(data => setVideo(...data))

    }, [params])

    if (!video) {
        return <NaoEncontrado />;
    }

    return (
        <Fragment>
            <Banner imagem="player" />
            <Titulo>
                <h1> Player </h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                >
                </iframe>
            </section>
        </Fragment>
    )
}

export default Player;