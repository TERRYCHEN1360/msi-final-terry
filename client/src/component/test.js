// import React from "react";
// import SockJsClient from "react-stomp";
//
// class Orders extends  React.Component{
//
//     constructor(props){
//         super(props)
//         this.state = {
//             orders: [],
//             reponse: '',
//             is_Mounted: true
//         };
//     }
//
//     componentDidMount(){
//         this.state.is_Mounted = true
//         this.setState({
//             orders:this.state.orders,
//             is_Mounted: this.state.is_Mounted
//         })
//
//     }
//
//     onConnect = () =>{
//         console.log("you are connected");
//     }
//
//     onMessage = (msg) =>{
//         console.log(msg);
//         if (typeof msg === "object") {
//             this.state.orders = msg;
//             this.setState({
//                 stocks: [...this.state.orders]
//             });
//         } else {
//             this.setState({
//                 response: msg
//             });
//         }
//     }
//
//     componentWillUnmount(){
//         this.state.is_Mounted = false;
//     }
//
//
//     render(){
//         return (
//             <div>
//                 {this.state.is_Mounted && <SockJsClient
//                     url='http://localhost:8080/ws'
//                     topics={['/topic/orders']}
//                     onConnect={this.onConnect}
//                     onMessage={this.onMessage}
//                     ref={ (client) => { this.clientRef = client }}
//                 />}
//
//                 <ul>
//                 {
//                     this.state.orders.map( (v) => (
//                         <li>{v.total_price}</li>
//                     ))
//                 }
//                 </ul>
//             </div>
//         )
//     }
//
// }
//
// export default Orders;