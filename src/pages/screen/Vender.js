import { Grid } from '@material-ui/core'
import React, { useState } from 'react'

import {
    Button,
    TextField,
} from '@material-ui/core';

import Firebase from '../../services/FirebaseConnect'
import {v4 as uuidv4} from 'uuid'

export default function Vender() {

    const[nome, setNome] = useState("")
    const[qualidade, setQualidade] = useState("")
    const[valor, setValor] = useState("")
    const[link, setLink] = useState("")

    const salvar = () => {

        let skin = {
            nome: nome,
            qualidade: qualidade,
            valor: valor,
            link: link
        }
        let code = uuidv4()

        Firebase
            .database()
            .ref(`skins/${code}`)
            .set(skin)
            .then(() => {
                console.log("Dados Salvos")
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    return(
        <Grid container sapacing={1}>
			<Grid item sm={12} xs={12}>
                <TextField 
                    label="Nome da Skin" 
                    variant="outlined"
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)}
                    size="small" 
                    type="email"
                    style={{width:"100%", marginBottom: 10}}
                />
                <TextField 
                    label="Qualidade (Ex: Factory New)" 
                    variant="outlined"
                    value={qualidade}
                    onChange={(e)=> setQualidade(e.target.value)}
                    size="small" 
                    type="email"
                    style={{width:"100%", marginBottom: 10}}
                />
                <TextField 
                    label="Valor Desejado" 
                    variant="outlined"
                    value={valor}
                    onChange={(e)=> setValor(e.target.value)}
                    size="small" 
                    type="email"
                    style={{width:"100%", marginBottom: 10}}
                />
                <TextField 
                    label="Link do Inventário (Trade Link)" 
                    variant="outlined"
                    value={link}
                    onChange={(e)=> setLink(e.target.value)}
                    size="small" 
                    type="email"
                    style={{width:"100%", marginBottom: 10}}
                />
                <Button
                    onClick={salvar}
                    variant="contained" 
                    color="primary"
                >
                    Enviar para Análise
                </Button>
            </Grid>
        </Grid>
    )
}