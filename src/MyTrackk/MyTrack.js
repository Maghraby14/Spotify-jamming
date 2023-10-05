import React from "react";
import './MyTrack.css'
function MyTrack(props){
   
    function handleRemove(e){
        props.removesong(props.id);
    }
    return (
        <li key={props.id} className="track">
    <div className="content">
    <h3>{props.SongName}</h3>
        <h4>{props.artist}</h4>
        <h4>{props.album}</h4>
        
    </div>
        <div >
        <button onClick={handleRemove} className="btn">-</button>

        </div>
        
        </li>
    );

}
export default MyTrack;