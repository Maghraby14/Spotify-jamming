import React from "react";
import './Track.css';
function Track(props){

    function handleAdd(e){
        let obj ={name:props.SongName,artist:props.artist,album:props.album,id:props.id};
        props.addsong(obj);
    }
    return (
        <li key={props.id} className="track">
        <div className="content">
        <h3>{props.SongName}</h3>
        <h4>{props.artist} | {props.album}</h4>
        </div>
        <div >
        <button onClick={handleAdd} className="btn">+</button>
        </div>
        
    
        </li>
    );
}
export default Track;