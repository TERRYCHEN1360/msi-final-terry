import React from "react"
import {connect} from "react-redux";
import {getHistory} from "./action/dailysales.action";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';
import Historydialog from "./historydialog";

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 10
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        width: '100%',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class Dailysales extends React.Component{
    componentDidMount(){
        this.props.getHistory().then( () =>{
            let temp = 0;
            let temp1 = 0;
            this.state.test = this.props.dailysales
              this.props.dailysales.map( (v) =>(
                temp = temp + v.total_price,
                  temp1 = temp1 + 1
            ))
            this.state.total_price = temp
            this.state.total_order = temp1
            this.setState({
                test:this.state.test,
                total_price: this.state.total_price,
                total_order: this.state.total_order
            })
            console.log(this.state.test)
        })
    }

    state = {
        open: false,
        order: {},
        test:[],
        total_price: 0,
        total_order: 0
    };

    handlefilter = (event) =>{

        if(event.target.value !== "All") {
            console.log(event.target.value)
            this.state.test = this.props.dailysales.filter((v) => {
                return v.order_date === event.target.value
            })
            this.setState({
                test: this.state.test
            })
        }else{
            this.state.test = this.props.dailysales
            this.setState({
                test:this.state.test
            })
        }

    }

    handleClickOpen = (event) => {
         this.state.order = event
        this.setState({
            order: this.state.order,
            open: true
        });
         console.log(this.state.order)
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render(){
        const { classes } = this.props;

        return(
            <div>
                <div>
                    FilterByDate: <select onChange={this.handlefilter}>
                    <option value="All">All</option>
                    {this.props.dailysales.map((row,index) =>(
                        <option key= {index} value={row.order_date}>{row.order_date}</option>
                        ))}
                </select>
                </div>
                <h1>Sales History</h1>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Order Number</CustomTableCell>
                                <CustomTableCell align="right">Order Date</CustomTableCell>
                                <CustomTableCell align="right">Total Price</CustomTableCell>
                                <CustomTableCell align="right">Total Order</CustomTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.test.length >0 && this.state.test.map( row => (
                                <TableRow className={classes.row} key={row.id}  onClick={() => this.handleClickOpen(row)}>
                                    <CustomTableCell component="th" scope="row" >
                                        {row.order_id}
                                    </CustomTableCell>
                                    <CustomTableCell align="right"><Moment format={"YYYY/MM/DD HH:mm"}>{row.order_date}</Moment></CustomTableCell>
                                    <CustomTableCell align="right">{row.total_price}</CustomTableCell>
                                    <CustomTableCell align="right">{row.total_order}</CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    { Object.keys(this.state.order).length !== 0  && <Historydialog o={this.state.open}
                                    c={this.handleClose}
                                   order={this.state.order}
                    />}
                </Paper>
                <h2>Current Total Revenue: {this.state.total_price }</h2>
                <h2>Current Total Order: {this.state.total_order }</h2>
            </div>

        )
    }
}

Dailysales.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps({dailysales}) {
    return {dailysales};
}


export default connect(mapStateToProps,{getHistory})(withStyles(styles)(Dailysales));