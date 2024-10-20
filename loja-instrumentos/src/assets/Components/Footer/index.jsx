import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <p>Nossa Loja - Instrumentos Musicais</p>
                <p>Rua Tito, 54 - Lapa</p>
                <p>São Paulo - Brasil</p>
            </div>
            <div className={styles.social}>
                <img src={require('../../../../public/img/whats.png')} alt="WhatsApp" className={styles.icon} />
                <img src={require('../../../../public/img/insta.png')} alt="Instagram" className={styles.icon} />
                <img src={require('../../../../public/img/face.png')} alt="Facebook" className={styles.icon} />
            </div>
        </footer>
    )
}

export default Footer
