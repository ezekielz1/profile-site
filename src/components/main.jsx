import React from 'react';
import Gallery from './gallery/gallery';
import Header from './header/header';
import Section from './section/section';
import DesignInfo from './design_info/design-info';
import Art from '../data/art';
import Designs from '../data/designs';
import DevProjects from '../data/development';
import './main.css'

import logo from '../img/ea_logo.svg'

import defaultImage from '../img/no_image.svg';
import background1 from '../img/bg/bg_1.png';
import background2 from '../img/bg/bg_2.png';
import Modal from './modal/modal';
import Boxes from './boxes/boxes';
import DevInfo from './dev_info/dev-info';
import Footer from './footer/footer';

const mediaQueries = {
    mobile: window.matchMedia('(max-width: 1000px)'),
}

let lastScroll = 0;

export default class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mobile: true,
            scrollDirection: null,

            modalImage: defaultImage,
            modalTitle: null,
            modalText: null,
            modalVisible: false,
        }

        this.changeModal = this.changeModal.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleResize = this.handleResize.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        this.handleResize(mediaQueries.mobile)
        mediaQueries.mobile.addEventListener('change', this.handleResize)
        window.addEventListener('keydown', this.handleKeyDown)
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        mediaQueries.mobile.removeEventListener('change', this.handleResize)
        window.removeEventListener('keydown', this.handleKeyDown)
        window.removeEventListener('scroll', this.handleScroll)
    }

    changeModal(info) {
        this.setState({
            modalImage: info.image,
            modalTitle: info.title,
            modalText: info.text
        })
        this.toggleModal()
    }

    toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    handleResize(e) {
        if (e.matches) {
            this.setState({
                mobile: true
            })
        } else {
            this.setState({
                mobile: false
            })
        }
    }

    handleScroll(e) {
        const currentScroll = window.scrollY;
        const direction = (currentScroll > lastScroll) ? 'down' : 'up';
        if (this.state.scrollDirection !== direction) {
            this.setState({scrollDirection: direction})
        }

        lastScroll = currentScroll
    }

    handleKeyDown(e) {
        if (e.key === "Escape" && this.state.modalVisible) {
            this.toggleModal()
        }
    }

    render() {
        const dev_info_comps = []
        DevProjects.forEach((project) => {
            dev_info_comps.push(
                <DevInfo info={project} onImageClick={this.changeModal}/>
            )
        })

        const design_info_comps = []
        Designs.forEach((design) => {
            design_info_comps.push(
                <DesignInfo info={design} onImageClick={this.changeModal} />
            )
        } )

        return ( 
            <div className='main' style={this.state.mobile ? null : {backgroundImage: `url(${background1}), url(${background1}), url(${background2})`}}>
                <Modal ref={this.modalRef} image={this.state.modalImage} title={this.state.modalTitle} text={this.state.modalText} hidden={this.state.modalVisible} toggleCallback={()=>this.toggleModal()}/>
                <Header mobile={this.state.mobile} scroll={this.state.scrollDirection}links={[
                    {text:'Development', url:'#development'}, 
                    {text:'Design', url:'#design'}
                ]}/>
                <div className='hero-section'>
                    {this.state.mobile ? null :
                        <Boxes disableCenter={true}>
                            <div className='hero'>
                                <img src={logo} alt='Ezekiel Andersen Logo' className='hero__image'/>
                            </div>
                        </Boxes>
                    }
                    <h1 className='name-title'>Ezekiel Andersen</h1>
                </div>
                
                <Section id='development' title='Development'>
                    {dev_info_comps}
                </Section>
                <Section id='design' title='Design'>
                    {design_info_comps}
                    <h2 className='sub-header'>Other Art</h2>
                    <Gallery items={Art} onItemClick={this.changeModal} center/>
                </Section>
                <Footer email="ezekiel.g.andersen@gmail.com" phone="+64 22 123 0316" address="Waipukurau, Hawke's Bay"/>
            </div>
        );
    }
}