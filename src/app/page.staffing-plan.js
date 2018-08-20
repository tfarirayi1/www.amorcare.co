import React from 'react';

export default class StaffingPlanPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
    }
    render(){
        return(
            <div className="glossary">
                <div>
                    Staffing Plan
                </div>
                <div>
                    We assign staff according to the needs of the client
                </div>
                <div>
                    Our staff can cover the following shift types: Day, Night and Sleep-in
                </div>
            </div>
        );
    }
}