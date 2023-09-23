import React from "react";
import {connect} from "react-redux"
import {allOrder} from "../action/order.action";
import DisplayCurrentOrder from "../component/DisplayCurrentOrder"

class currentorder extends React.Component{

    componentDidMount(){
        this.props.allOrder().then( (data) =>{
            this.state.order = this.props.orders
            this.setState({
                order: this.state.order,
                type: ''
            })
            console.log(this.state.order)
            }
        )
    }

    constructor(props){
        super(props)
        this.state = {
            order: []
        }


    }

    // handlefilter = (event) =>{
    //     let temp = []
    //     if(event.target.value !== 'all') {
    //         temp = this.props.menus.filter((e) => {
    //             return e.type === event.target.value
    //         })
    //     }else{
    //         temp = this.props.menus
    //     }
    //     // let temp = this.props.menus.filter((e) =>{
    //     //    return e[event.target.value].toLowerCase().search(
    //     //        event.target.value.toLowerCase()) !== -1;
    //     // })
    //     this.setState({
    //         menu: temp
    //     })
    // }

    render(){
        return(
            <div>
                <DisplayCurrentOrder o={this.state}
                />
            </div>
        )
    }
}

function mapStateToProps(appState){
    return{
        orders:appState.order
    }
}



export default connect(mapStateToProps,{allOrder})(currentorder)