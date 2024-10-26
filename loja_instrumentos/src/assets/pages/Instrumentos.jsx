import styles from '../styles/Instrumentos.module.css'
import guitarra from '../img/guitarrinha.jpg'

function Instrumentos() {
    return(
        <section className={styles.sectionvilon}>
            <div className={styles.liine}></div>
            <div className={styles.divpaivilon}>
                <div className={styles.divsame}>
                    <img src={guitarra} alt="Guitarra" />
                    <h4>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</h4>
                    <p>R$ 989,50</p>
                </div>

                <div className={styles.divsame}>
                    <img src={guitarra} alt="Guitarra" />
                    <h4>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</h4>
                    <p>R$ 989,50</p>
                </div>

                <div className={styles.divsame}>
                    <img src={guitarra} alt="Guitarra" />
                    <h4>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</h4>
                    <p>R$ 989,50</p>
                </div>

                <div className={styles.divsame}>
                    <img src={guitarra} alt="Guitarra" />
                    <h4>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</h4>
                    <p>R$ 989,50</p>
                </div>
            </div>
            <div className={styles.liine}></div>
        </section>
    ) 
}


export default Instrumentos