import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

export default class Modal extends React.Component {

    render() {
        return (
            <div className={`modal-container ${this.props.hidden ? 'modal-show' : ''}`} ref={this.modalContainer}>
                <div className='modal'>
                    <FontAwesomeIcon icon={faTimes} className='modal__closer' onClick={this.props.toggleCallback}/>
                    <a className='modal-image-link' href={this.props.image} target='_blank' rel='noopener noreferrer'>
                        <img className='modal__image' src={this.props.image} alt='Modal'/>
                    </a>
                    {this.props.children}
                    {!!this.props.title ?
                        <h2 className='modal__title'>{this.props.title}</h2> : null
                    }
                    {!!this.props.text ? 
                        <p className='modal__text'>{this.props.text}</p> : null
                    }
                </div>
            </div>
        );
    }
}