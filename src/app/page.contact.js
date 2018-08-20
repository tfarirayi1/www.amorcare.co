import React from 'react';

export default class ContactPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
    }
    render(){
        return(
            <div className="glossary">
                <div>
                    Contact Details
                </div>
                <div>
                    general enquiries:
                </div>
                <div>
                    client support:
                </div>
            </div>
        );
    }
}