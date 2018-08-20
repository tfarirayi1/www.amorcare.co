import React    from 'react';
import          'styles/about.css';

export default class AboutPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
    }
    render(){
        return(
            <div className="about">
                <div className="global---page-title">
                    About Us
                </div>
                <div className="global---page-section">
                    <div className="about---philosophy-title">
                        Philosophy&mdash;
                    </div>
                    <div className="about---philosophy-text">
                        Amor Care believes in continuity and stability for both clients and staff. We encourage regularity by assigning each worker to a particular type of care service and providing free two-hour induction allowances per worker-client relationship.
                    </div>
                </div>
                <div className="global---page-section">
                    <div className="about---company-declaration">
                        <div>Company number 10445417.</div>
                        <div>Registered in England and Wales.</div>
                    </div>
                </div>
            </div>
        );
    }
}