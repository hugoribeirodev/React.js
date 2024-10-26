import styles from '../styles/Contato.module.css'
import whatz from '../img/whats.png'
import imsta from '../img/insta.png'
import faces from '../img/face.png'

function Contato() {
    return (
        <section className={styles.sectioncontato}>
            <div className={styles.divformpai}>
                <div className={styles.divformfilha}>
                    <h2>Entre com o seu nome:</h2>
                    <input type="text" placeholder="Digite seu nome aqui:" />

                    <h2>Entre com o seu e-mail:</h2>
                    <input type="text" placeholder="Digite seu email aqui:" />

                    <div className={styles.caixamaior}>
                        <textarea type="text" placeholder="Faça seu pedido por aqui:" />
                    </div>

                    <button>Enviar</button>
                </div>

                <div className={styles.divredes}>
                    <h1>Acesse também nossas redes sociais:</h1>
                    <div className={styles.divimages}>
                        <img src={whatz} alt="Whatsapp" />
                        <img src={imsta} alt="Instagram" />
                        <img src={faces} alt="Facebook" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contato;