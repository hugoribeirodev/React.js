import styles from '../styles/Footer.module.css'
import Face from '../img/face.png'
import Insta from '../img/insta.png'
import Whats from '../img/whats.png'

function Footer() {
    return(
        <section className={styles.sectionfooter}>
            <div className={styles.fundopreto}> 
                <h2>Nossa Loja - Instrumentos Musicais</h2>
                <p>Rua Tito, 54 - Lapa</p>
                <p>São Pauço - Brasil</p>
            <div className={styles.redes}>
                <img src={Whats} alt="Whats" />
                <img src={Insta} alt="Instagram" />
                <img src={Face} alt="Face" />
            </div>
            </div>

            
        </section>
    )
}

export default Footer