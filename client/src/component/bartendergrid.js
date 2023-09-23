import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./bartendercard"
import {connect} from "react-redux";
import {setFoodStatus} from "../action/cooker.action"


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 250,
        width: 250
    },
    control: {
        padding: theme.spacing.unit * 2
    }
});

class GuttersGrid extends React.Component {
    state = {
        spacing: "16"
    };

    handleClick =(event) =>{
        let temp = {
            id:event.target.name,
            status:" cooked"
        }
        this.props.setFoodStatus(temp).then( (res) =>{
            if(res.payload.data.success === false){
                this.props.orders.order.map( (v) =>{
                    v.order_menu.map( (o, index) =>{
                        if(o.id === Number(temp.id)){
                            v.order_menu.splice(index,1)
                            console.log(v.order_menu)
                            this.forceUpdate();
                        }
                    })
                })
            }
        })
    }

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value
        });
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        //console.log(this.props.orders)
        return (
            <Grid container className={classes.root} spacing={8}>
                <Grid item xs={12}>
                    <Grid
                        container
                        className={classes.demo}
                        justify="flex-start"
                        spacing={Number(spacing)}
                    >
                        {this.props.orders.order.map( (value, index) => {
                            let obj = value.order_menu.find( (v) => {
                                if(v.status === null && v.menu.type === "drink" && value.status === null){
                                    return true;
                                }
                            })
                            if(obj !== undefined ){
                                return <Grid key={index} item>
                                    {/*<Paper className={classes.paper} />*/}
                                    <Card order={value}
                                          c = {this.props.c}
                                          s = {this.handleClick}
                                    />
                                </Grid>
                            }
                        })}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default (connect(null,{setFoodStatus})(withStyles(styles)(GuttersGrid)));
