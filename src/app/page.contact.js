import React        from 'react';
import FormBroker   from 'broker.form';
import              'styles/contact.css';

export default class ContactPage extends React.Component{
    constructor(){
        super();
        // load procedures
        this.handleInputChange=FormBroker.handleInputChange.bind(this);
        this.traverseForm=FormBroker.traverseForm.bind(this);
        // set state
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput='';
        this.state.messageInput='';
    }
    render(){
        return(
            <div className="contact">
                <div className="global---page-title">
                    Contact Us
                </div>
                <div className="global---page-section">
                    <div className="contact---section-title">
                        Client Support
                    </div>
                    <div className="contact---contact-card">
                        <div className="contact---contact-title">
                            Lorrain Thorne
                        </div>
                        <div className="contact---contact-detail">
                            phone:<br/>0333 123 4231
                        </div>
                        <div className="contact---contact-detail">
                            email:<br/>lorrain.thorne@amorcare.co
                        </div>
                    </div>
                </div>
                <div className="global---page-section">
                    <div className="contact---section-title">
                        Contact Form
                    </div>
                    <div ref={this.form} className="contact---contact-form">
                        <div className="contact---form-input">
                            <label htmlFor="emailInput">
                                subject
                            </label>
                            <select id="subjectInput" className="subject" value={this.state.subjectInput}
                                onChange={this.handleInputChange}>
                                <option value="general">General Enquiry</option>
                                <option value="client-support">Client Support</option>
                            </select>
                        </div>
                        <div className="contact---form-input">
                            <label htmlFor="emailInput">
                                email
                            </label>
                            <input id="emailInput" type="text" autoComplete="off" value={this.state.emailInput}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="contact---form-input">
                            <label htmlFor="emailInput">
                                message
                            </label>
                            <textarea id="messageInput" autoComplete="off" rows="5" value={this.state.messageInput}
                                onChange={this.handleInputChange}></textarea>
                        </div>
                        <div className="contact---form-submit" ref={this.formSubmitButton}>
                            <div>send</div>
                            <div>&rarr;</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}