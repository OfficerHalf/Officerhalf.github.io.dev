import React, { Component } from 'react';
import classNames from 'classnames';
import './Card.scss';

interface CardProps {
    hoverable?: boolean;
    hover?: number;
    image?: string;
    maxWidth?: string;
    maxHeight?: string;
    maxWidthImage?: string;
    maxHeightImage?: string;
}

export default class Card extends Component<CardProps, {}> {
    public render() {
        const hoverable = this.props.hoverable || this.props.hover;
        let hover: number = 0.95;
        if (this.props.hover !== null && this.props.hover !== undefined) {
            hover = this.props.hover > 1 ? 1 - (this.props.hover - 1) : this.props.hover;
        }
        const cardClasses = classNames(
            'CardComponent',
            {
                hoverable
            }
        );
        const imageStyles: React.CSSProperties = {
            maxWidth: this.props.maxWidthImage ? this.props.maxWidthImage : this.props.maxWidth,
            maxHeight: this.props.maxHeightImage
        };
        const cardStyles: React.CSSProperties = {
            maxWidth: this.props.maxWidth,
            maxHeight: this.props.maxHeight,
            transform: hoverable ? `scale(${hover})` : undefined
        };
        return (
            <div className={cardClasses} style={cardStyles}>
                {this.props.image &&
                <img className="cardImage" src={this.props.image} style={imageStyles}/>}
                <div className="cardContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}