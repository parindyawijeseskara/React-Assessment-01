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
    customerId,
    customerName,
    gender,
    nic,
    email
    
  ) {
    return {customerId,customerName,gender,nic,email};
  }
  
  const rows = [
    createData('C001', 'Amal','Male','200076987256','amal@gmail.com'),
    createData('C002', 'Kamal','Male','199076988756','kamal@gmail.com'),
    createData('C003', 'Nimal','Male','199876987242','nimal@gmail.com'),
    createData('C004', 'Saman','Male','199776987986','saman@gmail.com')
  ];




class CustomerForm extends Component{
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
                        Manage Customers
                    </Typography>
                </div>

                <div className={classes.form__container}>
                    <Fragment>
                        <Grid container spacing={0.5}>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Customer Id" label="Customer Id" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Customer Name" label="Customer Name" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Gender" label="Gender" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Nic" label="Nic" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                            <TextField id="outlined-basic" placeHolder="Email" label="Email" variant="outlined" size="small"
                            style={{width: '100%'}} />
                            </Grid>
                        </Grid>
                    </Fragment>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">Customer Id</TableCell>
                            <TableCell align="center">Customer Name</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Nic</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.customerId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.customerId}
                            </TableCell>
                            <TableCell align="center">{row.customerName}</TableCell>
                            <TableCell align="center">{row.gender}</TableCell>
                            <TableCell align="center">{row.nic}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        )
    }
}

export default withStyles(styleSheet)(CustomerForm)
