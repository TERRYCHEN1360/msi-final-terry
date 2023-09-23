import React from "react";
import './Popup.css'
import {connect} from "react-redux";
import {putOrder} from "./action/order.action";
import {getTableInfo} from "./action/order.action";
import {updateOrder} from "./action/order.action"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { withStyles } from '@material-ui/core/styles';
import Recipt from "./component/Receipt"
import {withRouter} from "react-router";
import Checkout from "./checkoutstepper/Checkout"
import {deleteOrder} from "./action/order.action"

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

class Popup extends React.Component {
    componentDidMount(){
        console.log(this.props.login)
        if(this.props.tableId !== undefined) {
            this.props.getTableInfo(this.props.tableId).then((data) => {
                // console.log(data.payload.data.order)
                if (data.payload.data.order != null) {
                    data.payload.data.order.order_menu.forEach((e) => {
                        let temp = {
                            menu: {
                                id: e.menu.id
                            }
                        }
                        this.state.ordered.push(e.menu);
                        this.state.order.order_menu.push(temp);
                    })
                    this.setState({
                        order: {
                            id: data.payload.data.order.id,
                            total_order: data.payload.data.order.total_order,
                            total_price: data.payload.data.order.total_price,
                            tablee: {
                                id: this.props.tableId
                            },
                            customer:{
                                id: 0
                            },
                            user:this.state.order.user,
                            order_menu: this.state.order.order_menu
                        },
                        ordered: this.state.ordered
                    })
                }
                //console.log(this.state.order)
                console.log(this.props.orders)
            })
        }else{
             let x =  this.props.customer ? this.props.customer : null
             console.log(x);
        }
    }

    handleClickOpenClose = (event) => {
        this.setState({ open: !this.state.open });

    };
    constructor(props){
        super(props)
        this.state = {
            order:{
                id: 0,
                total_order: 0,
                total_price: 0,
                tablee:{
                    id:this.props.tableId
                },
                customer:{
                    id: 0,
                },
                order_menu:[],
                user:{
                    id:0
                }
            },
            ordered:[],
            menu:this.props.menu,
            open: false,
            pay: false
        }
    }

    handleClick(v){
        console.log(this.props.login.user)
        this.state.order.user.id = this.props.login.user.id
        let temp = {
            menu:{
                id: v.id

            }
        }
        this.state.ordered.push(v);
         this.state.order.total_order +=1
        this.state.order.total_price += v.price
        this.state.order.order_menu.push(temp)
        this.setState({
            order:{
                id: this.state.order.id,
                total_order:this.state.order.total_order,
                total_price:this.state.order.total_price,
                tablee:{
                    id:this.props.tableId
                },
                customer:{
                    id: 0
                },
                order_menu: this.state.order.order_menu,
                user:this.state.order.user
            },
            ordered:this.state.ordered
        })
        //console.log(this.state.order)
     }

    handlefilter = (event) =>{
        let temp = []
        if(event.target.value !== 'all') {
            temp = this.props.menu.filter((e) => {
                return e.type === event.target.value
            })
        }else{
            temp = this.props.menu
        }
        // let temp = this.props.menus.filter((e) =>{
        //    return e[event.target.value].toLowerCase().search(
        //        event.target.value.toLowerCase()) !== -1;
        // })
        this.setState({
            menu: temp
        })
    }
    handlePutOrder  = (event) => {
        this.state.order.user.id = this.props.login.user.id
        event.preventDefault();
        if(this.props.tableId !== undefined) {
            if (!this.props.orders.order) {
                delete this.state.order.customer;
                this.props.putOrder(this.state.order);
            } else {
                this.state.order.id = this.props.orders.order.id;
                this.setState({
                    order: {
                        id: this.state.order.id,
                        total_order: this.state.order.total_order,
                        total_price: this.state.order.total_price,
                        tablee: {
                            id: this.props.tableId
                        },
                        order_menu: this.state.order.order_menu,
                        user:this.state.order.user
                    },
                    ordered: this.state.ordered
                })
                delete this.state.order.customer;
                this.props.updateOrder(this.state.order)
            }
        }else{
            delete this.state.order.tablee;
            this.state.order.customer.id = this.props.customer.id;
            this.setState({
                order: {
                    id: this.state.order.id,
                    total_order: this.state.order.total_order,
                    total_price: this.state.order.total_price,
                    customer:{
                        id: this.state.order.customer.id
                    },
                    order_menu: this.state.order.order_menu,
                    user:this.state.order.user
                },
                ordered: this.state.ordered
            })
              this.props.putOrder(this.state.order);
        }
   }



   handleDelete = (event) => {
       this.state.order.total_price -= this.state.ordered[event.target.name].price;
       this.state.order.total_order -= 1;
       this.state.order.order_menu.splice(event.target.name,1);

       this.state.ordered.splice(event.target.name,1);
       this.setState({
           order:{
               id: this.state.order.id,
               total_order:this.state.order.total_order,
               total_price:this.state.order.total_price,
               tablee:{
                   id:this.props.tableId
               },
               customer:{
                   id: 0,
               },
               user:this.state.order.user,
               order_menu: this.state.order.order_menu
           },
           ordered:this.state.ordered
       })
       console.log(this.state.order)

}

    handlepayClose = (event) => {
        this.setState({ pay: false, open:false });
        this.props.deleteOrder(this.props.orders.order.id).then( (res) =>{
            this.state.order.id = 0;
            this.state.order.total_price = 0
            this.state.order.total_order = 0;
            this.state.ordered = []
            this.state.order.order_menu = []
            this.setState({
                order:{
                    id: this.state.order.id,
                    total_order:this.state.order.total_order,
                    total_price:this.state.order.total_price,
                    tablee:{
                        id:this.props.tableId
                    },
                    customer:{
                        id: 0
                    },
                    user:this.state.order.user,
                    order_menu: this.state.order.order_menu
                },
                ordered: []
            })
        })
    };

    handlepaybycash = () =>{
        this.setState({ pay: false, open:false });
        this.props.deleteOrder(this.props.orders.order.id).then( (res) =>{
            this.state.order.id = 0;
            this.state.order.total_price = 0
            this.state.order.total_order = 0;
            this.state.ordered = []
            this.state.order.order_menu = []
            this.setState({
                order:{
                    id: this.state.order.id,
                    total_order:this.state.order.total_order,
                    total_price:this.state.order.total_price,
                    tablee:{
                        id:this.props.tableId
                    },
                    customer:{
                        id: 0
                    },
                    user:this.state.order.user,
                    order_menu: this.state.order.order_menu
                },
                ordered: []
            })
        })
    }

    handlepaycancel = () =>{
        this.setState({ pay: false, open:false });
    }

    handlepayOpen = () => {
        this.setState({ pay: true, open: false});
    };


    render() {
        const { classes } = this.props;
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="grid-container">
                    <div className = "grid-item">
                        {this.props.tableId !== 0 && <p>table: {this.props.tableId}</p>}
                        FilterBy: <select onChange={this.handlefilter}>
                        <option value="all">All</option>
                        <option value="food">Food</option>
                        <option value="drink">Drink</option>
                    </select>
                    <div >
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                                <th>type</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.menu.map(m => {
                                    return (
                                        <tr key={m.id} onClick={this.handleClick.bind(this, m)}>
                                            <td>{m.id}</td>
                                            <td>{m.name}</td>
                                            <td>{m.price}</td>
                                            <td>{m.type}</td>
                                        </tr>

                                    );
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="grid-item">
                        <p>Ordered: {this.state.order.total_order} </p>
                        <p>Total Price:{this.state.order.total_price}</p>
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                                <th>type</th>
                                <td>operation</td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.ordered.map((o, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{o.name}</td>
                                        <td>{o.price}</td>
                                        <td>{o.type}</td>
                                        <td><a name={index}onClick={this.handleDelete}>delete</a></td>
                                    </tr>
                                )
                            })
                            }
                            </tbody>
                        </table>
                    </div>

                </div>
                    <div>
                       <button onClick={this.handlePutOrder}>order</button>
                    <button onClick={this.props.closePopup}>close</button>
                        <div>
                            {this.props.orders.order &&<Button
                                variant="outlined"
                                color="primary"
                                onClick={this.handleClickOpenClose}
                            >
                                Check
                            </Button>}
                            <Dialog
                                fullScreen
                                open={this.state.open}
                                onClose={this.handleClickOpenClose}
                                TransitionComponent={Transition}
                            >
                                <AppBar className={classes.appBar}>
                                    <Toolbar>
                                        <IconButton
                                            color="inherit"
                                            onClick={this.handleClickOpenClose}
                                            aria-label="Close"
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                        <Typography variant="h6" color="inherit" className={classes.flex}>
                                            Close
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                                <Recipt
                                    order={this.props.orders.order}
                                />
                                <div align="center">
                                    <button className="btnstyle" onClick={this.handlepayOpen}>Pay By Card</button>
                                    <button className="btnstyle" onClick={this.handlepaybycash}>Pay By Cash</button>
                                </div>
                            </Dialog>
                            <Dialog
                                fullScreen
                                open={this.state.pay}
                                TransitionComponent={Transition}
                            >
                                <Checkout onClose={this.handlepayClose}
                                          onCancel={this.handlepaycancel}
                                          order = {this.props.orders.order}
                                />
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(appState){
    return{
        orders:appState.order,
        customer: appState.customer,
        login: appState.login
    }
}

 export default withRouter(connect(mapStateToProps,{putOrder,getTableInfo,updateOrder,deleteOrder})(withStyles(styles)(Popup)))