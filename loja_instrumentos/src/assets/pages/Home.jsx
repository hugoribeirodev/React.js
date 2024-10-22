import styles from '../styles/Home.module.css'

function Home() {
    return(
        <section className={styles.sectionhome}>
            <div className={styles.line}></div>
            <div className={styles.redd}>
                <div className={styles.rose}>
                    <h1>Nossa Loja - Instrumentos Musicais</h1>
                    <p>Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certol Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponiveis e tenha em mãos instrumentos de ponta!</p>
                </div>

                <div className={styles.imagemloja}></div>
            </div>
            <div className={styles.line}></div>
        </section>
    ) 
}


export default Home;