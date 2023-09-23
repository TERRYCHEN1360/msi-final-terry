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
        fontSize: 20
    },
    body: {
        fontSize: 13,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});
function CustomizedTable(m) {
    const { classes } = m;

    return (
        <div>
            <h1>Menu</h1>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Id</CustomTableCell>
                        <CustomTableCell align="right">Name</CustomTableCell>
                        <CustomTableCell align="right">Price</CustomTableCell>
                        <CustomTableCell align="right">type</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { m.menu.map((row,index) => (
                        <TableRow className={classes.row} key={index}>
                            <CustomTableCell component="th" scope="row">
                                {index}
                            </CustomTableCell>
                            <CustomTableCell align="right">{row.name}</CustomTableCell>
                            <CustomTableCell align="right">{row.price}</CustomTableCell>
                            <CustomTableCell align="right">{row.type}</CustomTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
        </div>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);