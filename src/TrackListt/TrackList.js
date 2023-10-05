import React from "react";
import Track from "../Trackk/Track";
import './TrackList.css'
function TrackList(props){
    return (
        <>

        <ul className="list-group">
                    {props.arraylist.map((song) => (<Track SongName={song.name} artist={song.artist} album={song.album} id={song.id} addsong={props.addsong}/>))}
        </ul>
        
        </>
    );
}
export default TrackList;