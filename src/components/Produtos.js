import React,{useEffect} from 'react';
import NavBar from './NavBar';
import Container from '@mui/material/Container';

import CardProduto from './CardProduto';
//import api from '../api';
import axios from 'axios';
export const Produtos = (props)=>{

    useEffect(  () => {
        axios.get("https://www.fruityvice.com/api/fruit/all",{ headers:{
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
           }}).then(response=>console.log(response))
        .catch(e=>console.error(e))
        },[]);

    return( 
        <>
        <NavBar/>
        <Container >
            <CardProduto/>
        </Container>
         
         </>
          
      );
    }
export default Produtos;