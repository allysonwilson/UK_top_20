import React from "react"

const SongDetail = (props) => {
  if(!props.["im:name"]) return(<p>choose a song from above</p>)
  return <div>
      <p>{props.song.["im:name"]}</p>
      <img src={props.["im:image"]}/>
      </div>

}

export default SongDetail;
