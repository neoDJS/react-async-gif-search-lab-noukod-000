import React from 'react';

export default class GifSearch extends React.Component {

  render(){
    return (
        <form onSubmit={this.props.onSubmit}>
            <input type='text' value={props.query} onChange={props.handleChange}/>
            <button type='submit' className='btn primary'>Search</button>
        </form>
    )
  }
    
}
