import React from 'react';
import FALLBACK_IMAGE from './assets/rocket.png';

interface ImageProps {
    source: string;
    altText: string
}

interface ImageState {
    image: string
}

class Image extends React.Component<ImageProps, ImageState> {

    constructor(props: ImageProps){
        super(props);
        this.state = {
            image: ''
        };
    }

    addDefaultImg(event: any) {
        event.target.src = FALLBACK_IMAGE;
    }

    componentDidMount() {
        this.setState({image: this.props.source})
    }

    componentDidUpdate(prevProps: ImageProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (prevProps.source !== this.props.source) {
          this.setState({ image: this.props.source });
        }
      }

    render(){
        return (
            <img
                className='custom-img'
                src= {this.state.image}
                alt = {this.props.altText}
                onError= {this.addDefaultImg}
            />
        );
    }
}

export default Image;