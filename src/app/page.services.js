import React    from 'react';
import image5   from 'images/image5.jpeg';
import image6   from 'images/image6.jpeg';
import image8   from 'images/image8.jpeg';
import image9   from 'images/image9.jpeg';
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
                        We provide <b>support workers</b> and <b>care assistants</b> for <b>autism</b>, <b>learning disability</b> and <b>mental health</b> care homes, on-demand. We cover day, night and sleep-in shift schedules.
                    </div>
                </div>
                <div className="global---page-section">
                    <div className="services---image">
                        <img className="service-image" src={image5} alt=""/>
                        <img className="service-image" src={image9} alt=""/>
                    </div>
                    <div className="services---image">
                        <img className="service-image" src={image8} alt=""/>
                        <img className="service-image" src={image6} alt=""/>
                    </div>
                </div>
                <div className="global---page-section">
                    <div>
                        Induction allowance&mdash;the first two hours of each assigned staff member's shift with a client are not charged if the worker has not been assigned to that client before.
                    </div>
                </div>
            </div>
        );
    }
}