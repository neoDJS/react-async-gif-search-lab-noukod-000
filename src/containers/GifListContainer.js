import React from 'react'

export default class GifListContainer extends React.Component {
  state = { gifs: [] };

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${YOUR QUERY HERE}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res=>res.json)
    .then(data =>{
        this.setState({ gifs: data.map(g=>g.images.original.url) });
      }
    );
  }

  render() {
    return (<div>
              <GifList gifs={this.state.gifs} />
              <GifSearch />
            </div>
          );
  }
}
