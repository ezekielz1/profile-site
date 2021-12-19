import React from 'react';
import GalleryItem from './gallery-item';
import './gallery.css'

export default class Gallery extends React.Component {

    render() {
        const items = [];

        this.props.items.forEach(item => {
            items.push(
                <GalleryItem image={item.image} title={item.title} onClick={() => this.props.onItemClick(item)}/>
            )
        });

        return(
            <div className='gallery' style={!!this.props.center ? {justifyContent: 'center'} : null}>
                {items}
            </div>
        )
    }
}