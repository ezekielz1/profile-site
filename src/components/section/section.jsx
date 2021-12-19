import React from 'react';
import './section.css'

export default class Section extends React.Component {
    render() {
        return (
            <div id={this.props.id} className='section'>
                <h1 className='section__title'>{this.props.title}</h1>
                <div className='section-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}