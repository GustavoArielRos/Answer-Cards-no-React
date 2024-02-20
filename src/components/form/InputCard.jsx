import React from 'react';
import { Form, FormGroup, Label, Input, Button} from "reactstrap";
import { useState } from 'react';


function InputCard({handleSubmit}) {

    const [card, setCard] = useState({});

    const submit = (e) => {
        //e.preventDefault();

        handleSubmit(card);
    }

    function handleChange(e){
        setCard({...card,[e.target.name]: e.target.value})
    }

    return (
        <div>
            <Form onSubmit={(e) => submit(e)}>
                <FormGroup>
                    
                    <Input
                        
                        name="questao"
                        placeholder="Questão"
                        type="text"
                        onChange={(e) => handleChange(e)}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    
                    <Input
                        
                        name="resposta"
                        placeholder="Resposta"
                        type="text"
                        onChange={(e) => handleChange(e)}
                    />
                </FormGroup>
                {' '}
                <Button>
                    Adicionar
                </Button>
            </Form>  
        </div>
    );
}


export default InputCard;

