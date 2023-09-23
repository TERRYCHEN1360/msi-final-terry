import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import {addMenu, getMenu, editMenu,delMenu} from '../action/menu.action';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import "./addmenu.css"
import {connect} from "react-redux";
import MenuWithOperation from "../component/MenuWithOperation"

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

const ranges = [
    {
        value: 'food',
        label: 'food',
    },
    {
        value: 'drink',
        label: 'drink',
    },
];

class Addmenu extends React.Component {
    state = {
        newmenu: {
            name: '',
            price: 0,
            img: '',
            type: '',
            description: ''
        },
        editmenu:{
            name: '',
            price: 0,
            img: '',
            type: '',
            description: ''
        },
        menu:[]
    };

    handleedit = (event) => {
        this.state.editmenu = this.state.menu[event.target.name]
        this.setState({
            newmenu: this.state.newmenu,
            menu:this.state.menu,
            editmenu: this.state.editmenu
        })
    }

    handleeditsubmit = (event) =>{
        event.preventDefault();
        this.props.editMenu(this.state.menu).then( (res) =>{
            this.state.menu = this.props.menus
            this.setState({
                newmenu: this.state.newmenu,
                menu:this.state.menu,
                editmenu: this.state.editmenu
            })
        })
    }
    handlefilter = (event) =>{
        let temp = []
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
        this.state.menu = temp
        this.setState({
            newmenu: this.state.newmenu,
            menu:this.state.menu,
            editmenu: this.state.editmenu
        })
    }
    componentDidMount(){
        this.props.getMenu().then( (res) =>{
            this.state.menu =this.props.menus
            this.setState({
                newmenu: this.state.newmenu,
                menu:this.state.menu,
                editmenu: this.state.editmenu
            })
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addMenu(this.state.newmenu).then( () =>{
            this.state.menu = this.props.menus
            this.setState({
                newmenu: this.state.newmenu,
                menu:this.state.menu,
                editmenu: this.state.editmenu
            })
        });
    }

    handleeditChange = prop => event => {
        this.state.editmenu[prop] = event.target.value
        this.setState({
            newmenu: this.state.newmenu,
            menu:this.state.menu,
            editmenu: this.state.editmenu
        })
    };
    handleChange = prop => event => {
        this.state.newmenu[prop] = event.target.value
        this.setState({
            newmenu: this.state.newmenu,
            menu:this.state.menu,
            editmenu: this.state.editmenu
        })
    };

    handleDelete = (event) =>{
        this.props.delMenu(this.state.menu[event.target.name].id).then( () =>{
            this.state.menu = this.props.menus
            this.setState({
                newmenu: this.state.newmenu,
                menu:this.state.menu,
                editmenu: this.state.editmenu
            })
        });
    }



    render() {
        const { classes } = this.props;

        return (
            <div>
                FilterBy: <select onChange={this.handlefilter}>
                <option value="all">All</option>
                <option value="food">Food</option>
                <option value="drink">Drink</option>
            </select>
                <MenuWithOperation menu={this.state.menu}
                                   handledel={this.handleDelete}
                                   handleedit={this.handleedit}
                />

            <div className="area">
            <div className={classes.root}>
                <h4>New Product</h4>
                <TextField
                    label="Name"
                    id="simple-start-adornment"
                    value={this.state.newmenu.name}
                    onChange={this.handleChange('name')}
                    className={classNames(classes.margin, classes.textField)}
                />
                <TextField
                    label="Price"
                    type="number"
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    value={this.state.newmenu.price}
                    onChange={this.handleChange('price')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    label="img"
                    id="simple-start-adornment"
                    value={this.state.newmenu.img}
                    onChange={this.handleChange('img')}
                    className={classNames(classes.margin, classes.textField)}
                />

                <TextField
                    label="description"
                    id="simple-start-adornment"
                    value={this.state.newmenu.description}
                    onChange={this.handleChange('description')}
                    className={classNames(classes.margin, classes.textField)}
                />

                <TextField
                    select
                    label="Choose Type"
                    className={classNames(classes.margin, classes.textField)}
                    value={this.state.newmenu.type}
                    onChange={this.handleChange('type')}
                >
                    {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
                <button type= "submit" onClick={this.handleSubmit}>submit</button>
            </div>
                <div className="area">
                    <div className={classes.root}>
                        <h4>Edit Product</h4>
                        <TextField
                            label="Name"
                            id="simple-start-adornment"
                            value={this.state.editmenu.name}
                            onChange={this.handleeditChange('name')}
                            className={classNames(classes.margin, classes.textField)}
                        />
                        <TextField
                            label="Price"
                            type="number"
                            id="simple-start-adornment"
                            className={classNames(classes.margin, classes.textField)}
                            value={this.state.editmenu.price}
                            onChange={this.handleeditChange('price')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="img"
                            id="simple-start-adornment"
                            value={this.state.editmenu.img}
                            onChange={this.handleeditChange('img')}
                            className={classNames(classes.margin, classes.textField)}
                        />
                        <TextField
                            label="description"
                            id="simple-start-adornment"
                            value={this.state.editmenu.description}
                            onChange={this.handleeditChange('description')}
                            className={classNames(classes.margin, classes.textField)}
                        />

                        <TextField
                            select
                            label="Choose Type"
                            className={classNames(classes.margin, classes.textField)}
                            value={this.state.editmenu.type}
                            onChange={this.handleeditChange('type')}
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <button type= "submit" onClick={this.handleeditsubmit}>submit</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(appState){
    return{
        menus:appState.menu
    }
}

Addmenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,{addMenu, getMenu,editMenu,delMenu})(withStyles(styles)(Addmenu));
