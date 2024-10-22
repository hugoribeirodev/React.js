import '../styles/Home.module.css'

function Loja ({foto, titulo, paragrafo}) {

    return(
        <>

<section>
            <div className={styles.red}>
                <div className={style.rosa}> 
                    <h1>{titulo}</h1>
                    <p>{paragrafo}</p>
                </div>          

                <div>
                    <img src={foto} alt="Loja" />
                </div>

            </div>
        </section>
                

        </>
    )
}

export default Loja