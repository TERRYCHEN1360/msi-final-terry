import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./displaysystem.css"

const styles = {
    card: {
        minWidth: 250,
        maxWidth: 250,
        minHeight:250,
        maxHeight:250,
        overflow:"auto"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },

};

function SimpleCard(props) {
    const { classes } = props;
    console.log(props.order)
    let x = props.order.id

    return (
        <div >
        <Card className={classes.card}>
            <div>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.order.id}
                </Typography>
                <Typography variant="h4" component="h2">
                    {props.order.order_menu.map( (row,index) => (
                        <div key = {index}>
                            {row.status === null && row.menu.type ==="food" &&<div>{row.menu.name !== null && <div><a name={row.id} onClick={props.s}>{row.menu.name}</a>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        </div>}
                        </div>}
                        </div>
                    ))}
                </Typography>

            </CardContent>
            </div>
            <div className="but">
                <button className="myButton" value={x} onClick={props.c} >Cooked</button>
            </div>
        </Card>

        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);