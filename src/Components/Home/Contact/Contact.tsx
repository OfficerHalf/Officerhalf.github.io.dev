import React, { Component } from 'react';
import Email from './Icons/Email';
import ContactLink from './ContactLink';
import LinkedIn from './Icons/LinkedIn';
import GitHub from './Icons/GitHub';
import './Contact.scss';
import { Measures } from '../../../Constants';

const textStyle: React.CSSProperties = {
    marginLeft: Measures.nbsp * 2
};

export default class Contact extends Component {
    public render() {
        return (
            <div className="ContactComponent">
                <h2>Contact</h2>
                <div>
                    <ContactLink href="mailto:nathan@nathan-smith.org"><Email/><span style={textStyle}>nathan@nathan-smith.org</span></ContactLink>
                    <ContactLink href="https://www.linkedin.com/in/nathan-r-smith/"><LinkedIn/><span style={textStyle}>/nathan-r-smith</span></ContactLink>
                    <ContactLink href="https://github.com/OfficerHalf"><GitHub/><span style={textStyle}>OfficerHalf</span></ContactLink>
                </div>
            </div>
        );
    }
}
