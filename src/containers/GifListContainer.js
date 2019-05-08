import React from 'react'

export default class GifListContainer extends React.Component {
  state = { 
    search: '',
    gifs: []
   };

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res=>res.json)
    .then(data =>{
        this.setState({ gifs: data.data.map(g=>g.images.original.url).slice(0, 3) });
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
