import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from './Home.module.css'

function Home() {
    return (
        <>
            <Header />
            <Container>
            <section className={styles.home}>
                <div className={styles.texto}>
                    <p>
                        Olá, sou <br />
                        <span>Hugo Ribeiro</span> <br />
                        Dev Full Stack
                    </p>
                    <Link to="/Sobre" className={`${styles.btn} ${styles.btn_purple}`}>Sobre mim</Link>
                </div>

                <figure>
                    <img
                        className={styles.img_home} src="Imagem-developer.svg"
                        alt="Imagem de Home"
                    />
                </figure>
            </section>
            </Container>
            <Footer />
        </>
    );
}

export default Home;
