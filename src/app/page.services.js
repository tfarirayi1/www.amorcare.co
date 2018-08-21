import React    from 'react';
import          'styles/services.css';

export default class ServicesPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
    }
    render(){
        return(
            <div className="services">
                <div className="global---page-title">
                    Available Services
                </div>
                <div className="global---page-section">
                    <div>
                        On-demand provision of <em>Support Workers</em> and <em>Care Assistants</em> for Autism, Learning Disability and Mental Health care homes&#59;
                    </div>
                    <div>
                        We cover Day, Night and Sleep-in shift schedules.
                    </div>
                </div>
                <div className="global---page-section">
                    <div>
                        Free induction allowance;
                    </div>
                    <div>
                        The first two hours of each assigned staff member's shift with a client are not charged if the worker has not been assigned to that client before.
                    </div>
                </div>
            </div>
        );
    }
}