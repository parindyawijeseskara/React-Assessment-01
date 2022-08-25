import { withStyles } from "@mui/styles";
import React,{ Component,Fragment } from "react";
import {styleSheet} from "./style";
import Tabs from '@mui/material/Tabs';
import {Tab,Grid,Typography,TextField} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
    itemCode,
    description,
    price,
    qty
    
  ) {
    return {itemCode,description,price,qty};
  }
  
  const rows = [
    createData('I001', 'Chocalate',100.0, 24),
    createData('I002', 'Ice-cream', 150.0, 30),
    createData('I003', 'Dhal', 200.0, 50),
    createData('I004', 'Eggs',180.0,40)
  ];




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

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">Item Code</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Qty</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.itemCode}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.itemCode}
                            </TableCell>
                            <TableCell align="center">{row.description}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">{row.qty}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default withStyles(styleSheet)(ItemForm)
