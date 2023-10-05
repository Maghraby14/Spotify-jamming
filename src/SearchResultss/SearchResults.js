import React from "react";

import TrackList from "../TrackListt/TrackList";

function SearchResults(props){
    return(<TrackList arraylist={props.songs} addsong={props.addsong}/>);
}
export default SearchResults;