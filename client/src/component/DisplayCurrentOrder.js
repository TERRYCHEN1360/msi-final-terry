import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 10
    },
    body: {
        fontSize: 13,
        width: '100%',
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
function CustomizedTable(props) {
    const { classes } = props;
    props.o.order.forEach( (x) => {
        if(x.customer === null){
            x.type = 'DineIn'
        }else{
            x.type = 'Delivery'
        }
    })
    {
        return (
            <div>
                <h1>Total Current Order</h1>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Number</CustomTableCell>
                                <CustomTableCell align="right">Order Id</CustomTableCell>
                                <CustomTableCell align="right">Total Order</CustomTableCell>
                                <CustomTableCell align="right">Total Price</CustomTableCell>
                                <CustomTableCell align="right">Type</CustomTableCell>
                                <CustomTableCell align="right">Ordered</CustomTableCell>
                                <CustomTableCell align="right">Server</CustomTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.o.order.map((row, index) => (

                                <TableRow className={classes.row} key={index}>
                                    <CustomTableCell component="th" scope="row">
                                        {index}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">{row.id}</CustomTableCell>
                                    <CustomTableCell align="right">{row.total_order}</CustomTableCell>
                                    <CustomTableCell align="right">{row.total_price}</CustomTableCell>
                                    <CustomTableCell align="right">{row.type}</CustomTableCell>
                                    <CustomTableCell align="right"><select>{row.order_menu.map((r,index) =>(
                                        <option key={index}value={r.menu.name}>{r.menu.name}</option>
                                    ))}</select></CustomTableCell>
                                    <CustomTableCell align="right">{row.user.username}</CustomTableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);