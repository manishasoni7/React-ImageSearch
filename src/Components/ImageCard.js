import React from "react";

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.state = { spans: 0 }
    }

    componentDidMount() {
        this.imgRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imgRef.current.clientHeight;
        const spans = Math.ceil(height / 10 +2);
        this.setState({ spans })
    }

    render(){

        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <a href={urls.regular} target='_blank'>
                    <img ref={this.imgRef} alt={ description } src={ urls.regular }/>
                </a>
            </div>
        )
    }
}

export default ImageCard;