import React from "react";
import {connect} from "react-redux"
import {getLogin} from "./action/login.action";
import {withRouter} from "react-router";
import {logTime} from "./action/employee.action"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";


const styles = {
    card: {
        maxWidth: 445,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    root: {
        justifyContent: 'center'
    }
};


class login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            logininfo: {
            username: '',
            password: ''
        }}
        console.log(props);
    }

    handleChange = (event) =>{
        const field = event.target.name;
        this.state.logininfo[field] = event.target.value;
        this.setState({
            logininfo:this.state.logininfo
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getLogin(this.state.logininfo).then( (data) =>{
            if(data.payload.data.success){
                 localStorage.setItem('user',JSON.stringify(data.payload.data.user));
                 let user = {
                         id:data.payload.data.user.id
                 }
                 let temp = data.payload.data.user
                 this.props.logTime(user).then( (data)=> {
                     console.log(temp.authorities[0].authority)
                     if(temp.authorities[0].authority === "ROLE_COOKER"){
                         this.props.history.push('./cooker')
                     }else if(temp.authorities[0].authority === 'ROLE_BARTENDER'){
                         this.props.history.push('./bartender')
                     }else{
                         this.props.history.push('./Menu')
                     }
                 })
            }else{
                alert("wrong username/password")
            }
        })

    }

    render(){
        const { classes } = this.props;
        return(
            <Grid container
            justify="center"
            >
                <Card className={classes.card}>
                    <form onSubmit={this.handleSubmit}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={classes.media}
                            height="200"
                            image="https://content3.jdmagicbox.com/comp/dehradun/p9/9999px135.x135.150727155457.a8p9/catalogue/urban-house-restaurant-and-bar-dehradun-city-dehradun-home-delivery-restaurants-etig9gyicn.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="h3">
                                Log In
                            </Typography>
                            <Typography component="p">
                                Username: <input type="text" className="form-control" name="username" onChange={this.handleChange} />
                                Password: <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.root}>
                        <Button size="large" color="primary" type="submit">
                            Login
                        </Button>
                    </CardActions>
                    </form>
                </Card>
        </Grid>
        )}
}
login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect(null, {getLogin,logTime})(withStyles(styles)(login)))