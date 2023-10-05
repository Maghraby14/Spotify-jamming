import React,{useState,useEffect} from 'react';
import './App.css';
import SearchBar from './SearchBarr/SearchBar';
import SearchResults  from './SearchResultss/SearchResults';
import SpotifyAuth from "./apisuthorization/autho"

import Playlist from './Playlistt/Playlist';
function App() {
  const [songs,setSongs] = useState([]);
  const [playlist,setPlaylist]=useState([]);
  const [playname,setPlayname] = useState('');
  const [accesstoken,setAccessToken] = useState(null);
  const [tracks,setTracks] = useState([]);
  const handleAuthenticationSuccess = (accessToken) => {
    // Handle successful authentication, e.g., store the access token in state or perform API requests
    setAccessToken(accessToken);
    
  };
  
async function getSerchValue(song){
 
  setSongs([]);
  const serchsong= await fetch(`https://api.spotify.com/v1/search?q=${song}&type=track&limit=10`,{
    method: "GET", headers: { Authorization: `Bearer ${accesstoken}` }
  });
  const songss = await serchsong.json();  
  
  for (let i=0; i<9; i++) {
    
  setSongs((prev)=>[...prev,{id:songss.tracks.items[i].uri,name:songss.tracks.items[i].name ,artist:songss.tracks.items[i].artists[0].name,album:songss.tracks.items[i].album.name}]);
  }
  
}
function removeFromPlaylist(song){
  setPlaylist((play)=> play.filter((p)=> p.id !== song));
}
function addToPlaylist(song){
  if(playlist.every((p)=> p.id !== song.id))  {
    setPlaylist((prev)=>[...prev,song]);
  }

}
async function handleClick(e){
  const savedplaylist = playlist;
  console.log(savedplaylist);
  const arrr=[];
  for(let i=0;i<savedplaylist.length;i++){
    arrr.push(savedplaylist[i].id)
  }
  const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${accesstoken}` }
    });
    const a =await result.json();
    console.log(a.id);
    const addp = await fetch(`https://api.spotify.com/v1/users/${a.id}/playlists`,{
        method:"POST", 
        headers: { 
        Authorization: `Bearer ${accesstoken}`, 
        'Content-Type': 'application/json'},
        body:JSON.stringify({
        'name': playname,
        'description': "New playlist description",
        'public': false
        
       })} )
       const b =await addp.json();
       console.log(b.id);
       const addtop = await fetch(`https://api.spotify.com/v1/playlists/${b.id}/tracks`,{
        method:"POST", 
        headers: { 
        Authorization: `Bearer ${accesstoken}`, 
        'Content-Type': 'application/json'},
        body:JSON.stringify({
            "uris": 
            arrr
            ,
            "position": 0
        
       })} )
       const j = await addtop.json();

  setPlaylist([]);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Ja<span className='app-span'>mmm</span>ing
        </h1>
      </header>
      <div className='app-body'>
        <div className='search'>
        <SearchBar onsubmit={getSerchValue} auth={accesstoken}/>
        </div>
        
        <SpotifyAuth
        clientId="c965bfbf5f58448f892f1381ed9ee95c"
        redirectUri="http://localhost:3000/"
        scopes={['user-read-private', 'user-read-email','playlist-modify-public','playlist-modify-private']}
        onSuccess={handleAuthenticationSuccess}
      />
      <div className='mainn'>
      <div className='res'>
      <SearchResults songs={songs} addsong={addToPlaylist}/>
      </div>
        <div className='save'>
        <input type="text" name="playname" id="playname" value={playname} onChange={(e)=>setPlayname(e.target.value)} placeholder="Enter playlist name" className='playlist-name'/>
        <Playlist songs={playlist} removesong={removeFromPlaylist}/>
        <button onClick={handleClick} className='savebtn'>Save To Spotify</button>
        </div>
      </div>
      
        
        
      </div>
    </div>
  );
}

export default App;
