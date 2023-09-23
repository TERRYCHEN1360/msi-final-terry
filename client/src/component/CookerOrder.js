import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Displaysystem from"../component/displaysystem"


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
function CustomizedTable(props) {
    const { classes } = props;
    console.log(props.order)
    if(props.order !== undefined) {
        props.o.order.forEach((x) => {
            if (x.customer === null) {
                x.type = 'DineIn'
            } else {
                x.type = 'Delivery'
            }
        })
    }

    {
        return (
            <div>
                <Displaysystem
                orders={props.o}
                c={props.c}
                />
            </div>
        );
    }
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);