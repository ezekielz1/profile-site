import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../img/ea_logo.svg'
import './header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false,
        }
    }

    render() {
        const links = [];
        this.props.links.forEach(link => {
            links.push(
                <a key={link.text} href={link.url} className='header__link'>{link.text}</a>
            )
        });;

        return (
            <div className={`header ${(this.props.mobile && !this.state.menuVisible && this.props.scroll === 'down') ? 'header-hide' : null}`}>
                <img src={logo} className='header__logo' alt="Ezekiel Andersen Logo" onClick={()=>window.scrollTo(0, 0)}/>
                {this.props.mobile ? [
                    <FontAwesomeIcon className='header__menu-icon' icon={this.state.menuVisible ? faTimes: faBars} onClick={()=>{this.setState({menuVisible: !this.state.menuVisible})}}/>,
                    <div className='header-links' style={this.state.menuVisible ? null : {display: 'none'}}>
                        {links}
                    </div>
                ]
                    : links
                }
            </div>
        );
    }
}