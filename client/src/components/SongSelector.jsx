import React from "react"

const SongSelector = (props) => {

  const songOptions = props.songs.map((["im:name"] , index) =>{
    return <option key={index} value={index}>{["im:name"]}
  })

  function handleChange(event){
    props.onSongSelect(event.target.value)
  }

  return (
    <select defaultValue="default" name="song-selector"
      onChange={handleChange} id="song-selector"
      <option disabled value="default">Choose a Song</option>
      {songOptions}
    </select>

  )

}

export default SongSelector;
