import { SessionContext } from '../context/Session';
import React,{useState,useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export const CardProduto = (props)=>{
    const [selected,setSelected] = useState(false)
    const [index,setIndex] = useState(null)
    const {cart}=useContext(SessionContext);
    const addItem = ()=>{
        const len = cart.push({aa:"aa",bb:"bb"})
        setIndex(len-1)
        setSelected(!selected);
    }
    const removeItem = ()=>{
        cart.splice(index,1);
        setSelected(!selected);
    }

    return( 

        <Card sx={{ maxWidth: 200 }}>
            

            <CardContent>
                    <CardMedia
                    component="img"
                    height="100"
                    image="/imgs/frutas/Banana.webp"
                    alt="green iguana"
                    />
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
                    Banana
                </Typography>
                <Typography color="text.secondary" component="div">
                    <table className='cardTable' style={{margin:"0 auto"}}>
                        <tbody>
                        <tr>
                            <td>
                                Carbohydrates(g)
                            </td>
                            <td>
                                22
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Protein(g)
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Fat(g)
                            </td>
                            <td>
                                0.2
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Calories
                            </td>
                            <td>
                                96
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Sugar(g)
                            </td>
                            <td>
                                17.2
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Typography>
            </CardContent>
        
            <CardActions sx={{justifyContent: "center"}}>
                {
                    selected?
                        <Button className='btnRemove' onClick={removeItem}>
                            Remove
                            <RemoveShoppingCartIcon sx={{marginLeft: "2.5px"}}/>
                        </Button>
                    :
                        <Button className='btnAdd'onClick={addItem}>
                            Add
                            <AddShoppingCartIcon sx={{marginLeft: "2.5px"}}/>
                        </Button>
                }
            </CardActions>
    </Card>

          
      );
    }
export default CardProduto;