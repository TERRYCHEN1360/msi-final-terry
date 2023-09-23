import React from "react"
import {connect} from "react-redux";
import {allEmp,adjusttime} from "../action/employee.action";
import DisplayEmployees from "../component/DisplayEmployees"

class Employees extends React.Component{


    recordtime = (event) =>{
        event.preventDefault();
        let x = Number(event.target.id)
        this.state.employeeworktime.login_time = event.target.value;
        this.state.employeeworktime.id = x;
        this.setState({
            employeeworktime:{
                id: this.state.employeeworktime.id,
                login_time:this.state.employeeworktime.login_time
            },
            emp:this.state.emp,
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.adjusttime(this.state.employeeworktime)
    }


    componentDidMount(){
        this.props.allEmp().then( () =>{
            console.log(this.props.emps)
            this.state.emp = this.props.emps
            this.setState({
                employeeworktime:{
                    id: this.state.employeeworktime.id,
                    login_time:this.state.employeeworktime.login_time
                },
                emp:this.state.emp,
            })
        })
    }

    constructor(props){
        super();
        this.state = {
            employeeworktime:{
                id: 0,
                login_time: {}
            },
            emp: []
        }
    }

    render(){
        console.log(this.props.emps)
        return(
            <DisplayEmployees
            emps={this.state.emp}
            r = {this.recordtime}
            s = {this.handleSubmit}
            />
        )
    }
}

function mapStateToProps(appState){
    return{
        emps:appState.employee
    }
}


export default connect(mapStateToProps,{allEmp,adjusttime})(Employees)