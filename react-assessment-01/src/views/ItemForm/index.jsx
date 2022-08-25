import { withStyles } from "@mui/styles";
import React,{ Component,Fragment } from "react";
import {styleSheet} from "./style";
import Tabs from '@mui/material/Tabs';
import {Tab,Grid,Typography,TextField} from '@mui/material';


class ItemForm extends Component{
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

                       <Tab centered label="Item" href="/itemForm" style={{color:'white',marginTop:'10px',fontSize:'20px'}}/>
                   </Tabs>
               </Grid>

               <div className={classes.title__container}>
                    <Typography variant="h4" style={{marginTop:'20px'}}>
                        Manage Items
                    </Typography>
                </div>

                <div className={classes.form__container}>
                    <Fragment>
                        <Grid container spacing={0.5}>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Item Name" label="Item Name" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Code" label="Code" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Description" label="Description" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Price" label="Price" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Qty" label="Qty" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                        </Grid>
                    </Fragment>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(ItemForm)
