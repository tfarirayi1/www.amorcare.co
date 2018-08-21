import React    from 'react';
import {Link}   from 'react-router-dom';
import          'styles/index.css';

export default class IndexPage extends React.Component{
    render(){
        return(
            <div className="index">
                <div>
                    <div className="index---brand-name">Amor Care</div> 
                    <div className="index---brand-slogan">Loving. Caring. Support.</div>
                </div>
                <div>
                    <Link to="/about">about</Link>
                </div>
                <div>
                    <Link to="/services">services</Link>
                </div>
                <div>
                    <Link to="/contact">contact</Link>
                </div>
            </div>
        );
    }
}