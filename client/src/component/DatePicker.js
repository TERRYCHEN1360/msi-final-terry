import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({

});

function DateAndTimePickers(props) {
    const { classes } = props;
    //console.log(props.userinfo.employeeWorkingTime.id)
    let x = props.userinfo.userDetail.employeeWorkingTime[0].id.toString()

    return (
        <form className={classes.container} noValidate>
            <TextField
                id= {x}
                label="Adjust Time"
                type="datetime-local"
                onChange={props.r}
                defaultValue={props.data}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <button className={classes.btsyle} type="submit" onClick={props.s}>confirm</button>
        </form>
    );
}

DateAndTimePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(DateAndTimePickers);