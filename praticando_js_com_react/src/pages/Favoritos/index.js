import { Fragment } from 'react';
import styles from './Favoritos.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'Contexto/Favoritos';

function Favoritos() {
    const {favorito} = useFavoritoContext();

    return (
        <Fragment>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1> Meus Favoritos </h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </Fragment>
    )
};

export default Favoritos;

