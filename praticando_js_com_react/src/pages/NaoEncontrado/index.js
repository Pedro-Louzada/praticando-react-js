import styles from './NaoEncontrado.module.css';

const NaoEncontrado = () => {
    return(
        <section className={styles.NaoEncontrado}>
            <h2>Ops!</h2>
            <p>O conteúdo que foi procura não foi encontrado!😢</p>
        </section>
    )
};

export default NaoEncontrado;