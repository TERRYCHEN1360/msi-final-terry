import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

// const products = [
//     { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
//     { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//     { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//     { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
// ];
// const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

const styles = theme => ({
    listItem: {
        padding: `${theme.spacing.unit}px 0`,
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing.unit * 2,
    },
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function Review(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {props.order.order_menu.map( (product,index) => (
                    <ListItem className={classes.listItem} key={index}>
                        <ListItemText primary={product.menu.name} secondary={product.menu.type} />
                        <Typography variant="body2">{product.menu.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Tax"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        {ccyFormat(props.order.total_price * 0.07)}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" className={classes.total}>
                    {ccyFormat(props.order.total_price * 1.17)}
                </Typography>
                </ListItem>
            </List>
            <Grid container spacing={16}>

                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {props.info.map(payment => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

Review.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);