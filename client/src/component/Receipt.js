import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TAX_RATE = 0.07;

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table : {
        minWidth: 700,
    },
    tableCell: {
        fontSize: '15pt'
}
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}


function Receipt(props) {
    let rows = props.order

    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <TableCell className={classes.tableCell}>Name</TableCell>
                        <TableCell className={classes.tableCell} align="right">Price</TableCell>
                        <TableCell className={classes.tableCell} align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.order_menu.map( (row,index) => (
                        <TableRow key={index}>
                            <TableCell className={classes.tableCell}>{row.menu.name}</TableCell>
                            <TableCell className={classes.tableCell} align="right">{row.menu.price}</TableCell>
                            <TableCell className={classes.tableCell} align="right">{row.menu.type}</TableCell>

                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell className={classes.tableCell} rowSpan={3} />
                        <TableCell className={classes.tableCell} colSpan={2}>Subtotal</TableCell>
                        <TableCell className={classes.tableCell} align="right">{ccyFormat(rows.total_price)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.tableCell}>Tax</TableCell>
                        <TableCell className={classes.tableCell} align="right">{`${(TAX_RATE * 100).toFixed(
                            0
                        )} %`}</TableCell>
                        <TableCell className={classes.tableCell} align="right">{ccyFormat(rows.total_price * 0.07)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.tableCell} colSpan={2}>Total</TableCell>
                        <TableCell className={classes.tableCell} align="right">{ccyFormat(rows.total_price * 1.07)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}

Receipt.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Receipt);

