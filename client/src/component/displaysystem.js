import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Grid from "../component/Grid"

const styles = {
    appBar: {
        position: "relative"
    },
    flex: {
        flex: 1
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
    state = {
        open: true
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h3" color="inherit" className={classes.flex}>
                                Cooker Current Orders
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid
                    orders={this.props.orders}
                    c={this.props.c}
                    />
                </Dialog>
            </div>
        );
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
