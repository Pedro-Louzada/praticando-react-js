import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { Fragment, useEffect, useState } from "react";
import styles from './Home.module.css'

function Home() {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Pedro-Louzada/api-vendas/videos')
        .then(response => response.json())
        .then(data => setInfos(data))
    },[]);
    
    return (
        <Fragment>
            <Banner imagem="home" />
            <Titulo>
                <h1> Um lugar para guardar seus vídeos e filmes! </h1>
            </Titulo>
            <section className={styles.container}>
                {infos.map((info) => {
                     return <Card key={info.id} {...info} />
                })}
            </section>
        </Fragment>
    )
}

export default Home;