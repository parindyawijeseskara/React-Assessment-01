import { withStyles } from "@mui/styles";
import React,{ Component } from "react";
import {styleSheet} from "./style";
import Tabs from '@mui/material/Tabs';
import {Tab,Grid} from '@mui/material';


class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {classes} = this.props
        return(
            <div className={classes.container}>

               <Grid className={classes.nav_bar}>
                   <Tabs onChange={onchange} centered >
                       <Tab label="Home"  href="/" style={{color:'white',marginTop:'10px',fontSize:'20px'}} />

                       <Tab label="Customer"  href="/customerForm" style={{color:'white',marginTop:'10px',fontSize:'20px'}} />

                       <Tab centered label="Item" href="/item" style={{color:'white',marginTop:'10px',fontSize:'20px'}}/>
                   </Tabs>
               </Grid>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Home)
