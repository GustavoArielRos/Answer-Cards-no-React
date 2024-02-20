
import { useState,useEffect } from "react"
import Perguntas from "../questions/Perguntas"

import styles from "./CardAnswer.module.css"

function CardAnswer() {

    const [cartas, setCartas] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cards', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
        })
         .then((resp) => resp.json())
         .then((data) => {
            setCartas(data)
            
         })
         .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <div className={styles.CardAnswer_container}>
                <h1>CardAnswer</h1>
                
                <div className={styles.perguntas}>
                    <Perguntas listacartas={cartas}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default CardAnswer
