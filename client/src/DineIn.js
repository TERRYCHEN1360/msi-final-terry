import React from "react";
import {connect} from "react-redux"
import {getMenu} from "./action/menu.action";
import Popup from "./Popup"
import {getOrder} from "./action/order.action";
import "./dinein.css"
import DineIngrid from"./DineIngrid"
import Dialog from '@material-ui/core/Dialog';



class DineIn extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            showPopup: false,
            tablename: ''
        };
        this.props.getOrder();
    }

    componentDidMount(){
        this.props.getMenu();
    }

    togglePopup = (event) =>{
        this.setState({
            showPopup: !this.state.showPopup,
            tablename: event.target.name
        });
    }

    render(){
        const { fullScreen } = this.props;
        return(
           <div>
               <DineIngrid
               f={this.togglePopup}
               />
               {this.state.showPopup ?
                   <Dialog
                       fullScreen={fullScreen}
                       open={this.state.showPopup}
                       onClose={this.togglePopup.bind(this)}
                       aria-labelledby="responsive-dialog-title"
                   >
                   <Popup
                       tableId={this.state.tablename}
                       menu={this.props.menus}
                       closePopup={this.togglePopup.bind(this)}
                   />
                   </Dialog>
                   : null

               }

           </div>
        )
    }

}

function mapStateToProps(appState){
    return{
        menus:appState.menu
    }
}


export default connect(mapStateToProps,{getMenu,getOrder})(DineIn)