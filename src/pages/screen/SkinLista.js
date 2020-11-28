import { Grid } from '@material-ui/core'
import React, {useLayoutEffect, useState} from 'react'

import {
    Button,
} from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Firebase from '../../services/FirebaseConnect'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default function SkinLista() {

    const [lista, setLista] = useState([])

    useLayoutEffect(() =>{
        Firebase
            .database()
            .ref(`/skins`)
            .on('value', snapshot => {
                if (snapshot.val()){
                    let dados = snapshot.val()
                    const keys = Object.keys(dados)
                    const lista = keys.map((key)=>{
                        return {...dados[key], id: key}
                    })
                    setLista(lista)
                }else{
                    setLista([])
                }
            })
    }, [])

    const obter = (item)=>{
        console.log(item)
        Firebase
            .database()
            .ref(`/skins/${item.id}`)
            .remove()
    }

    return(
        <Grid container sapacing={1}>
			<Grid item sm={12} xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell align="right">Qualidade</TableCell>
                                <TableCell align="right">Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lista.map((item, key)=> {
                                return<TableRow key={key}>
                                    <TableCell component="th" scope="row">{item.nome}</TableCell>
                                    <TableCell align="right">{item.qualidade}</TableCell>
                                    <TableCell align="right">{item.valor}</TableCell>
                                    <Button
                                        variant="contained"
                                        onClick={()=> obter(item)}
                                        color="primary"
                                        startIcon={<AttachMoneyIcon />}>
                                        Comprar
                                    </Button>
                                </TableRow>
                                }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}