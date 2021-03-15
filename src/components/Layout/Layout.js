import React, { Component } from 'react';

import Auxility from '../../hoc/Auxility';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer';


class Layout extends Component{

    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () =>{
this.setState({showSideDrawer:false})
    }

sideDrawerToggleHandler = () => {
    this.setState((prevState) =>{
        return {showSideDrawer: !prevState.showSideDrawer}
    } )
}
    render(){
        return(
            <Auxility>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxility>
        )
    }
} 
 


export default Layout;