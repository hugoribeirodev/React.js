
import styles from '../css/Home.module.css'

function Home(){

    return(
        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}></div>
            <div className={styles.texto_lado}>
                <h1> Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Na nossa agência de viagens, transformamos seus desejos em realidade. Seja uma escapada romântica, uma aventura emocionante ou um relaxamento em uma praia paradisíaca, temos o pacote ideal para você. Nossa equipe está pronta para ajudar em cada detalhe, garantindo que sua experiência seja inesquecível. Não espere mais! Entre em contato e comece sua jornada hoje mesmo!</p>
            </div>
        </section>
    )

}

export default Home