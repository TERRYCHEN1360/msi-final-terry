import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import {connect} from "react-redux";
import {deleteOrder} from "../action/order.action"
import {withRouter} from "react-router";

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

const steps = [' Billing Address', 'Payment details', 'Review your order'];



class Checkout extends React.Component {
    getStepContent = (step) =>{
        switch (step) {
            case 0:
                return <AddressForm order={this.props.order}/>;
            case 1:
                return <PaymentForm order={this.props.order} v={this.handlechange}/>;
            case 2:
                return <Review order={this.props.order} info={this.state.payments}/>;
            default:
                throw new Error('Unknown step');
        }
    }

    handlechange= (event) =>{
        let x = event.target.value;
        if(event.target.id === "cardName"){
            this.state.payments[1].detail = x;
        }
        if(event.target.id === "cardNumber"){
            console.log("in")
            this.state.payments[2].detail = x;
        }
        if(event.target.id === "expDate"){
            this.state.payments[3].detail = x;
        }
        this.setState({
            payments: this.state.payments
        })

    }
    state = {
        activeStep: 0,
        payments: [
            { name: 'Card type', detail: 'Visa' },
            { name: 'Card holder', detail: 'Mr John Smith' },
            { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
            { name: 'Expiry date', detail: '04/2024' },
        ]
    };


    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handlePlaceOrder = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));

    }

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="absolute" color="default" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Mercury Restaurant Ordering System
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Checkout
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your payment has been processed, we will send you an email notification.
                                        <div className={classes.buttons}>
                                            <Button name="finish"variant="contained" color = "primary" className={classes.button}
                                                    onClick={this.props.onClose}>
                                                Finish
                                            </Button>
                                        </div>

                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {this.getStepContent(activeStep)}
                                    {/*<div className={classes.buttons1}>*/}
                                    {/*<Button className={classes.button}>abc</Button>*/}
                                    {/*</div>*/}
                                    <div className={classes.buttons}>
                                        <Button variant="contained" color = "primary" className={classes.button}
                                            onClick={this.props.onCancel}
                                        >
                                            Cancel</Button>
                                        {activeStep !== 0 && (
                                            <Button onClick={this.handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                        )}
                                        {activeStep === 0  && <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}
                                        >
                                            Next
                                            {/*{activeStep === steps.length - 1 ? 'Confirm' : 'Next'}*/}
                                        </Button>}
                                        {activeStep === 1  && <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}
                                        >
                                            Next
                                            {/*{activeStep === steps.length - 1 ? 'Confirm' : 'Next'}*/}
                                        </Button>}
                                        {activeStep === 2  && <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handlePlaceOrder}
                                            className={classes.button}
                                        >
                                            Confirm
                                            {/*{activeStep === steps.length - 1 ? 'Confirm' : 'Next'}*/}
                                        </Button>}

                                    </div>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect(null,{deleteOrder} )(withStyles(styles)(Checkout)));