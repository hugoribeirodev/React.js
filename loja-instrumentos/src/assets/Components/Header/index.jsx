import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li>Home</li>
                    <li>Quem Somos</li>
                    <li>Instrumentos</li>
                    <li>Endereço</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
