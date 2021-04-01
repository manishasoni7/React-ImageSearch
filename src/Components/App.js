import React from 'react';
import unsplash from '../Api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import './App.css';

class App extends React.Component{
    state={images: []}
    onSearchSubmit= async (term)=>{
        const response=await unsplash.get('/search/photos',{
            params:{
                query: term
            }   
        });
        this.setState({images: response.data.results});
    }
    render(){
    return (
        <div className="main">
            <div className="Container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                
            </div>
        </div>
    
    );
    }
}

export default App;