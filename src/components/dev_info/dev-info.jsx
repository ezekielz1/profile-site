import { faCss3, faGithub, faHtml5, faJsSquare, faLaravel, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Gallery from '../gallery/gallery';

import './dev-info.css';

const tech_icons = {
    html: faHtml5,
    css: faCss3,
    js: faJsSquare,
    react: faReact,
    node: faNodeJs,
    php: faPhp,
    laravel: faLaravel
}

export default class DevInfo extends React.Component {
    render() {

        const info = this.props.info;
        const images = [];
        const technologies = [];

        if (!!info.images) {
            info.images.forEach((image) => {
                images.push(
                    {
                        image: image
                    }
                )
            })
        }

        if(!!info.tech) {
            info.tech.forEach((tech) => {
                technologies.push(
                    <FontAwesomeIcon className='dev-info__tech' icon={tech_icons[tech]}/>
                )
            })
        }

        return (
            <div className='dev-info'>
                {images.length > 0 ? 
                    <Gallery items={images} onItemClick={this.props.onImageClick} center/>
                    : null
                }
                <h2 className='dev-info__title'>{info.title}</h2>
                <div className='dev-info-tech'>
                    {technologies}
                </div>
                <p className='dev-info__text'>{info.text}</p>
                {!!info.statusText ?
                    <span className='dev-info-status'>
                        <b>Status: </b> {info.statusText}
                    </span>
                    : null
                }
                
                <div className='dev-info-links'>
                    {!!info.gitURL ?
                        <a className='button-link' href={info.gitURL} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub}/> <b>Github</b></a> : null
                    }
                    {!!info.url ?
                        <a className='button-link' href={info.gitURL} target='_blank' rel='noopener noreferrer'><b>View</b> <FontAwesomeIcon icon={faChevronRight}/></a> : null
                    } 
                </div>
            </div>
        );
    }
}