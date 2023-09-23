import React from "react";
import {connect} from "react-redux"
import {getMenu} from "./action/menu.action";
import Home from "./component/Home"



class menu extends React.Component{

    componentDidMount(){
        this.props.getMenu().then( () =>{
            this.state.menu = this.props.menus
            this.setState({
                menu:this.state.menu
            })
        })
    }

    constructor(props){
        super(props)
        this.state ={
            menu:[]
        }

    }

    handlefilter = (event) =>{
        let temp = [];
        if(event.target.value !== 'all') {
             temp = this.props.menus.filter((e) => {
                return e.type === event.target.value
            })
        }else{
            temp = this.props.menus
        }
        // let temp = this.props.menus.filter((e) =>{
        //    return e[event.target.value].toLowerCase().search(
        //        event.target.value.toLowerCase()) !== -1;
        // })
         this.setState({
             menu: temp
         })
    }

    render(){
        return(
            <div>
                FilterBy: <select onChange={this.handlefilter}>
                <option value="all">All</option>
                <option value="food">Food</option>
                <option value="drink">Drink</option>
                </select>
                {/*SearchBy: <input onChange={this.handlefilter}/>*/}
            <Home menu={this.state.menu}
            />
            </div>
        )
    }
}


function mapStateToProps(appState){
    return{
        menus:appState.menu
    }
}


export default connect(mapStateToProps,{getMenu})(menu)

// {/*<div className="container">*/}
// {/*<h1>Menu</h1>*/}
// {/*<table className="table table-bordered table-striped">*/}
// {/*<thead>*/}
// {/*<tr>*/}
// {/*<th>id</th>*/}
// {/*<th>name</th>*/}
// {/*<th>price</th>*/}
// {/*</tr>*/}
// {/*</thead>*/}
// {/*<tbody>*/}
// {/*{*/}
// {/*this.props.menus.map(menu => {*/}
// {/*return (*/}
// {/*<tr key={menu.id}>*/}
// {/*<td>{menu.id}</td>*/}
// {/*<td>{menu.name}</td>*/}
// {/*<td>{menu.price}</td>*/}
// {/*</tr>*/}
// {/*);*/}
// {/*})*/}
// {/*}*/}
// {/*</tbody>*/}
// {/*</table>*/}
// {/*</div>*/}