import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DatePicker from "../component/DatePicker"
import Employeelogtime from "../component/employeelogtime"

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 10,
        width: '100%',
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
class DisplayEmployees extends React.Component{

    state = {
        emps: this.props.emps,
        open: false
    }

    handleClickOpen = (event) => {
        this.state.emps = event
        this.setState({
            emps: this.state.emps,
            open: true
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const {classes} = this.props;
        console.log(this.props.emps)
        {
            return (
                <div>
                    <h1>Record of Employees Log Time</h1>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>Id</CustomTableCell>
                                    <CustomTableCell align="right">ID</CustomTableCell>
                                    <CustomTableCell align="right">User Name</CustomTableCell>
                                    <CustomTableCell align="right">Roles</CustomTableCell>
                                    <CustomTableCell align="right">Login Time</CustomTableCell>
                                    <CustomTableCell align="right">Logout Time</CustomTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.emps.map((row, index) => (
                                    <TableRow className={classes.row} key={index}>
                                        <CustomTableCell component="th" scope="row">
                                            {index}
                                        </CustomTableCell>
                                        <CustomTableCell align="right" onClick={() => this.handleClickOpen(row)}>{row.id}</CustomTableCell>
                                        <CustomTableCell align="right" onClick={() => this.handleClickOpen(row)}>{row.username}</CustomTableCell>
                                        <CustomTableCell align="right" onClick={() => this.handleClickOpen(row)}>{row.profile[0].type}</CustomTableCell>


                                        {row.userDetail.employeeWorkingTime.length !== 0 &&
                                        <CustomTableCell align="right"><DatePicker userinfo={row}
                                                                                   data={row.userDetail.employeeWorkingTime[0].login_time}
                                                                                   s={this.props.s}
                                                                                   r={this.props.r}/></CustomTableCell>}
                                        {row.userDetail.employeeWorkingTime.length === 0 &&
                                        <CustomTableCell align="right">This Employee has no login
                                            record</CustomTableCell>}
                                        {row.userDetail.employeeWorkingTime.length !== 0 &&
                                        <CustomTableCell align="right"><DatePicker userinfo={row}
                                                                                   data={row.userDetail.employeeWorkingTime[0].logout_time}
                                                                                   s={this.props.s}
                                                                                   r={this.props.r}/></CustomTableCell>}
                                        {row.userDetail.employeeWorkingTime.length === 0 &&
                                        <CustomTableCell align="right">This Employee has no logout
                                            record</CustomTableCell>}


                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        { Object.keys(this.state.emps).length !== 0  && <Employeelogtime o={this.state.open}
                                                                                        c={this.handleClose}
                                                                                        emps={this.state.emps}
                        />}
                    </Paper>
                </div>
            );
        }
    }
}

DisplayEmployees.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayEmployees);