import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <section className={styles.cabecalho}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quemsomos">Quem Somos</Link></li>
                        <li><Link to="/instrumentos">Instrumentos</Link></li>
                        <li><Link to="/endereco">Endereço</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </header>
        </section>
    )
}

export default Header
