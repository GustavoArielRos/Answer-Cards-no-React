import { ButtonGroup,Button } from "reactstrap";
import React from "react";
import {useState} from "react";

function Perguntas({listacartas}) {

    const [botaoResposta, setBotaoResposta] = useState(null);
    const [respostaCorreta, setRespostaCorreta] = useState(false);
    const [mensagemVisivel, setMensagemVisivel] = useState(false);
    const [botoesVisiveis, setBotoesVisiveis] = useState(false);
    const [botaoComecar, setBotaoComecar] = useState(true);

    function gerarAleatorio(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    function verificarResposta(idq,idr){
        if(idq === idr){
            setRespostaCorreta(true);
        }
        else{
            setRespostaCorreta(false);
        }

        setMensagemVisivel(true);
        setTimeout(() => {
            setMensagemVisivel(false);
           
        }, 2000);
    }

    function atrasarBotao(){

        
        setTimeout(() => {
            setBotoesVisiveis(true);
           
        }, 2000);
    }

    function comecarBotao(){
        setBotaoComecar(false);
    }

    function tela(){

        let listaresposta = [];
        let listarandomnum =[];
        for(let i =0; i<3; i++)
        {
            const qtd_cartas = listacartas.length;
            let posicao;

            do
            {
                posicao = gerarAleatorio(0,qtd_cartas);  
            }while(listarandomnum.includes(posicao));
            
            listarandomnum.push(posicao);
            listaresposta.push(listacartas[posicao]);
        }

        let pos;

        pos = gerarAleatorio(0,3);

        //renderizando os botões dentro da função
        const botaoRenderizado = (
            <div>
                <p>{listaresposta[pos].questao}</p>
                <ButtonGroup >
                    {listaresposta.map((solucao) => (
                        <Button 
                           key={solucao.id} 
                           
                           onClick={() => {verificarResposta(listaresposta[pos].id,solucao.id);tela()}}
                        >
                            {solucao.resposta}
                        </Button>
                    ))}
                    
                </ButtonGroup>
            </div>
        )
        
        setBotaoResposta(botaoRenderizado);
        setBotoesVisiveis(false);
        atrasarBotao();
    }
    
    return (
        <div>
            
                <div >
                    {botaoComecar && <Button onClick={() =>{tela(); comecarBotao()}}>Começar</Button>}
                    
                    {botoesVisiveis && botaoResposta}
                </div>
                {mensagemVisivel && respostaCorreta ? (
                    <p>Resposta Correta!</p>
                ) : mensagemVisivel && !respostaCorreta && (
                    <p>Resposta Errada!</p>
                )}
        </div>
    )
}

export default Perguntas
