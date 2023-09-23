import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux"
import {getMenu} from "../action/menu.action";
import Menudialog from "../component/Menudialog"


const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

class MainMenuCp extends React.Component{

    componentDidMount(){
        this.props.getMenu();
    }

    render(){
        const { classes } = this.props;
        console.log(this.props.menus)
        return (
            <React.Fragment>
                <CssBaseline />
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Main Menu
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Sichuan cuisine is one of the most famous in China, with centuries of evolution, with efforts and talents of many generations. Taste is what differentiates Sichuan food from the rest, taste is the soul of Sichuan food. One dish, one style, hundred dishes, hundred  styles. As the saying goes: China is a land of food and Sichuan , a land of tastes.
                                Throughout history much has been changed, China and Chinese, almost everything, every aspect, except Chinese food. Arguably it is Chinese cooks that have preserved the root of Chinese culture.
                            </Typography>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>

                            {this.props.menus.map((value, index) =>(
                                <Grid item  sm={6} md={4} lg={3} key={index}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={value.img} // eslint-disable-line max-len
                                            title="Image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {value.name}
                                            </Typography>
                                            <Typography>
                                                {value.description}
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Mercury Restaurant Ordering System
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>

        )
    }
}

function mapStateToProps(appState){
    return{
        menus:appState.menu
    }
}

export default connect(mapStateToProps,{getMenu})(withStyles(styles)(MainMenuCp));