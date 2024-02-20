import styles from "./AddCard.module.css"

import React from 'react';
import InputCard  from '../form/InputCard';

function AddCard() {

    function createCard(card){

        fetch("http://localhost:5000/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(card),
        })
          .then((resp) => resp.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err))
    }


    return (
        <div>
            <div className={styles.AddCard_container}>
                <h1>AddCard</h1>
                <InputCard handleSubmit={createCard}/>
            </div>
            
        </div>
    );
}

export default AddCard;
