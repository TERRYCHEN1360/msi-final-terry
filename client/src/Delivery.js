import React from "react"
import Grid from '@material-ui/core/Grid';
import {Field, reduxForm} from "redux-form";
import TextField from '@material-ui/core/TextField';
import {connect} from "react-redux"
import Button from "@material-ui/core/es/Button/Button";
import Popup from "./Popup"
import {getOrder} from "./action/order.action";
import {getMenu} from "./action/menu.action";
import {addcustomer} from "./action/customer.action"
import {findcustomer} from "./action/customer.action"
import Dialog from '@material-ui/core/Dialog';


const DELIVERY_FORM = [
    {label:"Name", type:"text", field:"name"},
    {label:"Address", type:"text", field:"address"},
    {label:"City", type:"text", field:"city"},
    {label:"State", type:"text", field:"state"},
    {label:"zip", type:"number", field:"zip"},
    {label:"Country", type:"text", field:"country"},
    {label:"Email", type:"text", field:"email"},
    {label:"Phone", type:"number", field:"phone"}
];

class Delivery extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            showPopup: false
        };
    }

    componentDidMount(){
        this.props.getMenu();
    }

    togglePopup (event) {
        this.setState({
            showPopup: !this.state.showPopup

        });
    }

    handleRegister = value => {
        const {name, address, city, state, zip, country, email, phone} = value;
        const customer = {
            name:name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            country:country,
            email:email,
            phone:phone
        };

        this.props.addcustomer(customer).then((data) =>{
            this.props.findcustomer(phone).then((res) =>{
                this.setState({
                    showPopup: !this.state.showPopup
                });
            })
        })
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
        const { fullScreen } = this.props;
        return(
            <React.Fragment>
                <h1>Delivery</h1>
                <form onSubmit={this.props.handleSubmit(this.handleRegister)}>
                    <Grid container spacing={24}>
                        {
                            DELIVERY_FORM.map(control => {
                                return <Field
                                    required
                                    component={this.renderField}
                                    name={control.field}
                                    key={control.field}
                                    control={control}
                                />
                            })
                        }
                    </Grid>
                    <div>
                    <Button variant="contained" color="primary" type="submit" style={{marginTop: 20}}>
                        Order
                    </Button>
                        {this.state.showPopup ?
                            <Dialog
                                fullScreen={fullScreen}
                                open={this.state.showPopup}
                                onClose={this.togglePopup.bind(this)}
                                aria-labelledby="responsive-dialog-title"
                            >
                            <Popup
                                menu={this.props.menus}
                                closePopup={this.togglePopup.bind(this)}
                            />
                            </Dialog>
                            : null
                        }
                    </div>
                </form>

            </React.Fragment>
        )
    }
}

function mapStateToProps(appState){
    return{
        menus:appState.menu
    }
}

export default connect(mapStateToProps,{getMenu,getOrder,addcustomer, findcustomer})(
    reduxForm({
        form: 'DeliveryForm'
    })(Delivery)
);