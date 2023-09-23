// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import CloseIcon from "@material-ui/icons/Close";
// import Slide from "@material-ui/core/Slide";
// import Dialoag from "./dialoag";
//
// const styles = {
//     appBar: {
//         position: "relative"
//     },
//     flex: {
//         flex: 1
//     }
// };
//
// function Transition(props) {
//     return <Slide direction="up" {...props} />;
// }
//
// class Check extends React.Component {
//     state = {
//         open: false
//     };
//
//     handleClickOpenClose = () => {
//         this.setState({ open: !this.state.open });
//     };
//
//     render() {
//         const { classes } = this.props;
//         return (
//             <div>
//                 <Button
//                     variant="outlined"
//                     color="primary"
//                     onClick={this.handleClickOpenClose}
//                 >
//                     Open full-screen dialog
//                 </Button>
//                 <Dialog
//                     fullScreen
//                     open={this.state.open}
//                     onClose={this.handleClickOpenClose}
//                     TransitionComponent={Transition}
//                 >
//                     <AppBar className={classes.appBar}>
//                         <Toolbar>
//                             <IconButton
//                                 color="inherit"
//                                 onClick={this.handleClickOpenClose}
//                                 aria-label="Close"
//                             >
//                                 <CloseIcon />
//                             </IconButton>
//                             <Typography variant="h6" color="inherit" className={classes.flex}>
//                                 Check
//                             </Typography>
//                             <Button color="inherit" onClick={this.handleClickOpenClose}>
//                                 Con
//                             </Button>
//                         </Toolbar>
//                     </AppBar>
//
//                     <Dialoag />
//                 </Dialog>
//             </div>
//         );
//     }
// }
//
// Check.propTypes = {
//     classes: PropTypes.object.isRequired
// };
//
// export default withStyles(styles)(Check);
