import React, { Component } from 'react';
import Email from './Icons/Email';
import ContactLink from './ContactLink';
import LinkedIn from './Icons/LinkedIn';
import GitHub from './Icons/GitHub';
import './Contact.scss';

export default class Contact extends Component {
    public render() {
        return (
            <div className="ContactComponent">
                <h2>Contact</h2>
                <div>
                    <ContactLink href="mailto:nathan@nathan-smith.org"><Email/><span>&nbsp;nathan@nathan-smith.org</span></ContactLink>
                    <ContactLink href="https://www.linkedin.com/in/nathan-r-smith/"><LinkedIn/><span>&nbsp;/nathan-r-smith</span></ContactLink>
                    <ContactLink href="https://github.com/OfficerHalf"><GitHub/><span>&nbsp;OfficerHalf</span></ContactLink>
                </div>
            </div>
        );
    }
}
