import styles from "./Home.module.css"

import React from 'react';
import {Link} from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";


function Home() {
    return (
        <div>
            <div className={styles.home_container}>
                <h1>Flash Cards</h1>
                <br></br>
                <ButtonGroup>
                    <Link to="/AddCard"><Button color="success">Adicionar Card</Button></Link>
                    
                    <Link to="/CardAnswer"><Button color="primary">Responder Card</Button></Link>
                </ButtonGroup>             
            </div>            
        </div>
    )
}

export default Home
