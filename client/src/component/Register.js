import React from "react"
import Grid from '@material-ui/core/Grid';
import {Field, reduxForm} from "redux-form";
import TextField from '@material-ui/core/TextField';
import {connect} from "react-redux"
import {register} from "../action/login.action";
import Button from "@material-ui/core/es/Button/Button";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const REGISTRATION_FORM = [
    {label:"User Name", type:"text", field:"username"},
    {label:"Password", type:"password", field:"password"},
    {label:"Confirm password", type:"password", field:"confirmPassword"},
    {label:"LastName", type:"text", field:"lastname"},
    {label:"FirstName", type:"text", field:"firstname"},
    {label:"SSN", type:"number", field:"ssn"},
    {label:"Email", type:"text", field:"email"},
    {label:"Salary", type:"number", field:"salary"},
    {label:"Phone", type:"number", field:"phone"}
];

class Register extends React.Component{

    handleRegister = value => {
        const {username, password, lastname, firstname, ssn, email, salary, phone} = value;
        const user = {
            username: username,
            password: password,
            userDetail: {
                last_name: lastname,
                first_name: firstname,
                ssn: ssn,
                email: email,
                salary: salary,
                phone: phone
            },
            profile:this.state.profile

        };
        this.props.register(user)

    }

    state = {
        profile:[{
            id: 0
        }]
    }

    handleChange = event => {
        this.state.profile[0].id = event.target.value
        this.setState({ profile: this.state.profile });
    };

    renderField(props){
        const {label, type} = props.control;
        const spacing = label ==="Email address" ? 12 : 6;
        return(
            <Grid item xs={12} md={spacing}>
                <TextField required type={type} label={label} {...props.input} fullWidth />
            </Grid>
        );
    }
    render(){


        return(
           <React.Fragment>
               <h1>New Employee</h1>
               <form onSubmit={this.props.handleSubmit(this.handleRegister)}>
                   <Grid container spacing={24}>
                   {
                       REGISTRATION_FORM.map(control => {
                           return <Field
                               component={this.renderField}
                               name={control.field}
                               key={control.field}
                               control={control}
                           />
                       })
                   }
                       <Grid item xs={12} md={6}>
                           <InputLabel>
                               Select Roles
                           </InputLabel>
                           <Select required  fullWidth
                                    value={this.state.profile[0].id}
                                    onChange={this.handleChange}
                           >
                               <MenuItem value={1}>Admin</MenuItem>
                               <MenuItem value={2}>Server</MenuItem>
                               <MenuItem value={3}>Bartender</MenuItem>
                               <MenuItem value={4}>Cooker</MenuItem>
                           </Select>
                       </Grid>
                   </Grid>
                   <Button variant="contained" color="primary" type="submit" style={{marginTop: 20}}>
                       Submit
                   </Button>
               </form>

           </React.Fragment>
        )
    }
 }

export default connect(null, {register})(
    reduxForm({
        form: 'RegisterForm'
    })(Register)
);