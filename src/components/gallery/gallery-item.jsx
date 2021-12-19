import React from 'react';

export default class GalleryItem extends React.Component{
    render() {
        return (
            <div className='gallery-item' style={{backgroundImage: `url(${this.props.image})`}} onClick={this.props.onClick}>
                {
                    !!this.props.title ?
                    <div className='gallery-item__overlay'>
                        <span className='gallery-item__text'>{this.props.title}</span>
                    </div> 
                    : null
                }
            </div>
        )
    }
}