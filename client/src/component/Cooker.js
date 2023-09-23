import React from "react"
import {connect} from "react-redux";
import {allOrder} from "../action/bartender.action";
import Cookerorder from "../component/CookerOrder"
import {setStatus} from "../action/cooker.action"
import SockJsClient from "react-stomp";

const API_URL = process.env.REACT_APP_API_URL;


class Cooker extends React.Component {

    componentDidMount(){
        this.props.allOrder().then( (res) =>{
            this.state.order = res.payload.data
            this.state.is_Mounted = true
            this.setState({
                order: this.state.order,
                type: '',
                is_Mounted: this.state.is_Mounted,
                obj: {
                    id: this.state.obj.id,
                    status: ""
                }
            })
        })
         }

    onConnect = () =>{
        console.log("you are connected");
    }

    onMessage = (msg) =>{
        console.log(msg);
        if (typeof msg === "object") {
           this.state.order = msg

            this.setState({
                order: this.state.order,
                is_Mounted: true
            });
        } else {
            this.setState({
                response: msg
            });
        }
    }

    componentWillUnmount(){
        this.state.is_Mounted = false;
        // this.setState({
        //     is_Mounted: this.state.is_Mounted
        // })
    }

    constructor(props){
        super(props)
        this.state = {
            order: [],
            type: '',
            reponse: '',
            is_Mounted: true,
            obj:{
                id:0,
                status:""
            }
        }
    }

    handleclick =(event) =>{
        console.log(event.target.value)
        this.state.obj.id = event.target.value
        this.setState({
            order: this.state.order,
            type: this.state.type,
            obj:{
                id:this.state.obj.id,
                status:"cooked"
            }
        })


         this.props.setStatus(this.state.obj);
    }

    render(){
        return(
            <div>
            {this.state.is_Mounted && <SockJsClient
                url={`${API_URL}/ws`}
                topics={['/topic/orders']}
                onConnect={this.onConnect}
                onMessage={this.onMessage}
                ref={ (client) => { this.clientRef = client }}
            />}
            <Cookerorder
                o = {this.state}
                c = {this.handleclick}
            />
            </div>
        )
    }
}




export default connect(null,{allOrder, setStatus})(Cooker)