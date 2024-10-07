
import styles from '../css/Home.module.css'
function Home(){

    return(
        <section classNam={styles.corpo_home}>
            <div className={styles.imagem_lado}></div>
            <div className={styles.texto_lado}>
                <h1> Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non tempora molestias fugit, recusandae inventore commodi corporis eius hic obcaecati! Saepe fugiat cupiditate enim illo obcaecati hic exercitationem, magnam aliquam.</p>
            </div>
        </section>
    )

}

export default Home