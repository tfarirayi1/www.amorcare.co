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
        this.contactForm=React.createRef();
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
                            Mrs. Lorrain Thorne
                        </div>
                        <div className="contact---contact-detail">
                            0333 123 4231
                        </div>
                        <div className="contact---contact-detail">
                            lorrain.thorne@amorcare.co
                        </div>
                    </div>
                </div>
                <div className="global---page-section">
                    <div className="contact---section-title">
                        Contact Form
                    </div>
                    <div ref={this.contactForm} className="contact---contact-form">
                        <div>
                            <label htmlFor="emailInput">
                                email
                            </label>
                            <input id="emailInput" type="email" autoComplete="off" value={this.state.emailInput}
                                onChange={this.handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="emailInput">
                                subject
                            </label>
                            <select id="subjectInput" value={this.state.subjectInput}
                                onChange={this.handleInputChange}>
                                <option value="general">General Enquiry</option>
                                <option value="client-support">client Support</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="emailInput">
                                message
                            </label>
                            <textarea id="messageInput" autoComplete="off" value={this.state.messageInput}
                                onChange={this.handleInputChange} onKeyDown={this.traverseForm}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}