
import styles from '../css/Home.module.css'

function Home(){
    return(
        <section className={styles.conteudohome}>
            <div className={styles.line}></div>
            <div className={styles.vermelho}>
                <div className={styles.Rosa}>Rosa</div>
                <div className={styles.Rosa2}>Rosa</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.azulclaro}>
                <div className={styles.branco}>Branco</div>
                <div className={styles.branco}>Branco</div>
                <div className={styles.branco}>Branco</div>
                <div className={styles.branco}>Branco</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.laranja}>
                <p className={styles.tagp}>Laranja</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.amarelo}>
                <div className={styles.azuldark}>Azul escuro</div>
                <div className={styles.verde}>Verde</div>
            </div>
        </section>
        
    )
}

export default Home