import React from 'react'

export default class GifList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map(c => (
          <li><image src={c} /></li>
        ))}
      </ul>
    );
  }
}
