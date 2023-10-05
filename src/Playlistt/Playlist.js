import React from "react";
import MyTrack from "../MyTrackk/MyTrack";
import './Playlist.css'
function Playlist(props){
    return(
    <>

        <ul className="list-group">
                    {props.songs.map((song) => (<MyTrack SongName={song.name} artist={song.artist} album={song.album} id={song.id} removesong={props.removesong}/>))}
        </ul>
        
        </>
    )
}
export default Playlist;