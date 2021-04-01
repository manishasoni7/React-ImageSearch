import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component{
    state={term:''}
   
    onFormSubmit= (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render(){
        return(
        <div className='search-bar'>
            <form onSubmit={this.onFormSubmit} className='form'>
                <div>
                    <div className='field'>Image Search</div>
                    <input
                    id="text" 
                    type="text" 
                    placeholder="Search..."
                    value={this.state.term} 
                    onChange={e=> this.setState({term: e.target.value})}
                    />
                </div>
                
            </form>

        </div>);
    }
}

export default SearchBar;