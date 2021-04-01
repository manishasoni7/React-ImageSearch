import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList= (props)=>{
    const ImgList= props.images.map((image)=>
    <ImageCard key={image.id} image={image}/>
    )
    return(
            <div className="image-list">{ImgList}</div>       
    );
}

export default ImageList;