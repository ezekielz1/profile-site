import React from 'react';

import './footer.css';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <span className='footer__email'>{this.props.email}</span>
                <span className='footer__phone'>{this.props.phone}</span>
                <span className='footer__address'>{this.props.address}</span>
            </footer>
        )
    }
}