import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {allOrderobj} from "./action/order.action"
import {connect} from "react-redux"

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 150,
        width: 150,
        backgroundColor: '#eff9f3'
    },
    control: {
        padding: theme.spacing.unit * 2
    }
});
    let x = [];
class GuttersGrid extends React.Component {

    state = {
        spacing: "16",
    };

    componentDidMount(){
        this.props.allOrderobj();

    }

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value
        });
    };



    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
            console.log(this.props.orders   )
        if(this.props.orders.order !== null) {
            if (Array.isArray(this.props.orders.order)) {
                this.props.orders.order.map((value) => {
                    x.push(value.tablee.id)
                })
            } else {
                if(this.props.orders.order !== undefined) {
                    if (!x.includes(this.props.orders.order.tablee.id)) {
                        x.push(this.props.orders.order.tablee.id);
                    }
                }
            }
        }
        if(this.props.orders.order === null){
               if(x.includes(this.props.orders.id)){
                   x.splice(x.findIndex( (x) =>{
                     return x === this.props.orders.id
                   }),1 )
               }
        }


        return (
            <Grid container className={classes.root} spacing={8}>
                <Grid item xs={12}>
                    <Grid
                        container
                        className={classes.demo}
                        justify="center"
                        spacing={Number(spacing)}
                    >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map( (value,index) => (
                            <Grid  key={value} item xs={4}>
                                <Paper style={{ backgroundColor: (x.includes(index+1)) ? "#d0d2f2" : "white" }} className={classes.paper}>
                                   <img className="imgclass" onClick={this.props.f} name={index+1} src="/image/table.jpg"/>
                                    <h4 className="headcss">Table: {index+1}</h4>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(appState){
    return{
        orders:appState.order
    }
}

export default connect(mapStateToProps, {allOrderobj})(withStyles(styles)(GuttersGrid));