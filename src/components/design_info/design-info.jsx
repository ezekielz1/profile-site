import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Gallery from '../gallery/gallery';
import './design-info.css';

export default class DesignInfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showContent: false,
        }
    }

    render() {
        const info = this.props.info
        const subsections = []

        if (!!info.subsections) {
            info.subsections.forEach((section) => {
                subsections.push(
                    <div className='design-info-subsection'>
                        <h2 className='design-info-subsection__heading'>{section.title}</h2>
                        {!!section.text ? 
                            <p className='design-info-subsection__text'>{section.text}</p>
                            : null
                        }
                        <Gallery items={section.images} onItemClick={this.props.onImageClick}/>
                    </div>
                )
            })
        }

        return (
            <div className='design-info'>
                <div className='design-info-top'>
                    <img src={info.logo} className='design-info-top__logo' alt={`"${info.title}" logo`}/>
                    <div>
                        <h2 className='design-info-top__heading'>{info.title}</h2>
                        <p className='design-info-top__text'>{info.text}</p>
                    </div>
                </div>
                
                {subsections.length > 0 ?
                        [
                            <button className='button-link expand-button' onClick={()=>this.setState({showContent: !this.state.showContent})}>Show Designs <FontAwesomeIcon icon={this.state.showContent ? faCaretUp : faCaretDown}/></button>,
                            this.state.showContent ? 
                                <div className='design-info-subsection-container'>
                                    {subsections}
                                </div>
                                : null
                        ]
                        : null
                    }
            </div>
        )
    }
}