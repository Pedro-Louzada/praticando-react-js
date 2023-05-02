import styles from './Banner.module.css';

function Banner({ imagem }) {
    return (
        /*criamos uma style dentro da própria div para que o backgorundImage seja dinâmica, pois iremos mudar a imagem conforme formos navegando nas rotas*/
        <div className={styles.capa}
            style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}></div>
    )
}

export default Banner;

