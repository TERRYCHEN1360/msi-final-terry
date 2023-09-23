// import React from 'react';
// import SockJsClient from "react-stomp";
//
// class Stocks extends React.Component {
//
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             stocks: {},
//             response: ""
//         };
//     }
//
//     sendHello = () => {
//         this.clientRef.sendMessage('/app/hello', "hello from client");
//     };
//
//     onConnect = () => {
//         console.log('You are connected...');
//     };
//
//     onMessage = (msg) => {
//         console.log(msg);
//         if (typeof msg === "object") {
//             this.state.stocks[msg.symbol] = msg;
//             this.setState({
//                 stocks: {...this.state.stocks}
//             });
//         } else {
//             this.setState({
//                 response: msg
//             });
//         }
//     };
//
//     render() {
//         return (
//             <div>
//                 <SockJsClient
//                     url='http://localhost:8080/ws'
//                     topics={['/topic/stock', '/topic/chat']}
//                     onConnect={this.onConnect}
//                     onMessage={this.onMessage}
//                     ref={ (client) => { this.clientRef = client }}
//                 />
//                 <p>
//                     <button onClick={this.sendHello}>Hello</button>
//                     <span>{this.state.response}</span>
//                 </p>
//                 <ul>
//                     {
//                         Object.keys(this.state.stocks)
//                             .map(symbol => {
//                                 let stock = this.state.stocks[symbol];
//                                 return (
//                                     <li key={stock.symbol}>{stock.symbol} - {stock.price} - {stock.time}</li>
//                                 );
//                             })
//                     }
//                 </ul>
//             </div>
//         );
//     }
//
// }
//
// export default Stocks;