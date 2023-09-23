import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
        minWidth: 250
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {

    render() {
        // console.log(this.props.order)
        return (
            <div>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.props.o}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        Order Number :{this.props.order.id}
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom variant="h4">
                            Ordered:
                        </Typography>
                        <ul>
                            {this.props.order.order_menu.map ( (value, index) => (
                                  <li key = {index}>{value.name}</li>
                            ))}
                        </ul>
                        {/*<Typography gutterBottom>*/}
                            {/*Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel*/}
                            {/*scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus*/}
                            {/*auctor fringilla.*/}
                        {/*</Typography>*/}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.c} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default CustomizedDialogDemo;