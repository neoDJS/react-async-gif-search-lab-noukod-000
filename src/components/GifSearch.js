import React from 'react';

export default class GifSearch extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  }

  render(){
    return (
        <form onSubmit={(e)=>{this.handleSubmit}}>
            <input type='text' value={this.props.search} onChange={this.props.handleChange}/>
            <button type='submit' className='btn primary'>Search</button>
        </form>
    );
  }

}
