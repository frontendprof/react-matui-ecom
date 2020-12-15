
import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeeCard from "./CofeeCard";
import CoffeeMakerList from "./constants";



const Content = () => {

    const getCoffeeMakerCard=coffeeMakerObj=>{
        return(
            <Grid item xs={12} sm={6} md={4}>

                <CoffeeCard  {...coffeeMakerObj}  />
                
            </Grid>
        )
    }



    return (
        <Grid container spacing={4}>

            {CoffeeMakerList.map(a => getCoffeeMakerCard(a))}
            
        </Grid>
    )
}

export default Content;
