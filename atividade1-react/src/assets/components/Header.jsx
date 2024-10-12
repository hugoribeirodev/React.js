
import styles from '../css/Header.module.css'

function Header(){

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <p className={styles.limee}>Limão</p>
            </div>
        </header>
    )

}

export default Header