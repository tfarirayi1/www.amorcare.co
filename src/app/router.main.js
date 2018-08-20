import React            from 'react';
import IndexPage        from 'page.index';
import ContactPage      from 'page.contact';
import AboutPage        from 'page.about';
import ServicesPage     from 'page.services';
import BlankPage        from 'page.blank';
import LoginRouter      from 'router.login';
import RouteBroker      from 'broker.route';
import {Switch,Route}   from 'react-router-dom';

export default class MainRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // set state
        this.state={};
        this.state.routes=[
            {
                endpoint:'/',
                component:IndexPage,
                exact:true,
            },
            {
                endpoint:'/login',
                component:LoginRouter,
                exact:false,
            },
            {
                endpoint:'/about',
                component:AboutPage,
                exact:true,
            },
            {
                endpoint:'/contact',
                component:ContactPage,
                exact:true,
            },
            {
                endpoint:'/services',
                component:ServicesPage,
                exact:true,
            },
        ];
    }

    render(){
        const RouteList=()=>{
            return this.renderRoutes();
        };
        return(
            <Switch>
                <RouteList/>
                <Route component={BlankPage}/>
            </Switch>
        );
    }
}