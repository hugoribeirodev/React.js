import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <section className="container">
                <div className="texto">
                    <p>
                        Olá, sou <br />
                        <span>Hugo Ribeiro</span> <br />
                        Dev Full Stack
                    </p>
                    <button className="btn btn-purple">Sobre mim</button>
                </div>

                <figure>
                    <img
                        className="img-home"
                        src="/Imagem-developer.svg"
                        alt="Imagem de Home"
                    />
                </figure>
            </section>
            <Footer />
        </>
    );
}

export default Home;
