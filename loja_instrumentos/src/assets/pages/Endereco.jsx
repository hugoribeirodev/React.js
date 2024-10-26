import styles from '../styles/Endereco.module.css'

function Endereco() {
    return (
        <section className={styles.sectionloc}>
            <div className={styles.divpailoc}>
                <div className={styles.divloc}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14632.491130865968!2d-46.6917602!3d-23.5280859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1729905269284!5m2!1spt-BR!2sbr" 
                        width="600" 
                        height="350" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className={styles.divbloco}>
                    <div className={styles.divcontent}>
                        <h1>Nossa Loja - Instrumentos Musicais</h1>
                        <p>Está situada na Rua Tito, 54 Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m2, com uma variada gama de instrumento, em um ambiente agradável para toda a familia!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Endereco