import styles from '../css/Rodape.module.css'
import insta from '../imagens/insta.jpg'
import face from '../imagens/face.jpg'
import tiktok from '../imagens/tiktok.png'
import whats from '../imagens/whtas.png'




function Rodape(){

    return(

            <footer claaName={styles.corpo}>
                <h3>Siga-nos nas redes sociais</h3>
                <div className={styles.icones}>
                    <img src={insta} alt="instagram" />
                    <img src={face} alt="Facebook" />
                    <img src={tiktok} alt="TikTok" />
                    <img src={whats} alt="Whatsapp" />
                </div>
                <h3>Telefone de contato - (11) 4002-8922</h3>
            </footer>

    )

}


export default Rodape