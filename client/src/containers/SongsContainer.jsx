import React from 'react';
import SongSelector from '../components/SongSelector'
import SongDetail from '../components/SongDetail'

class SongsContainer extends React.Component {
  constructor(props){
    super(props):
    this.state = {
      songs: [],
      currentSong: null
    };
    this.onSongSelect = this.onSongSelect.bind(this)
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    xhr.open("GET", url)

    xhr.addEventListener("load", () => {
      if (xhr.status !== 200)return;
      const Top20Songs = JSON.parse(xhr.responseText);
      this.setState({ songs : ContainerSongs})
    })
    xhr.send()
  }

  onSongSelect(index){
    const chosenSong = this.state.songs[index]
    console.log(chosenSong);
    this.setState({currentSong: chosenSong})
  }

  render(){
    return (
      <div>
        <h1>This is my Top 20 Songs container </h1>
      </div>
    )
  }
}
export default SongsContainer;
