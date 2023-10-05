import React,{useState} from 'react';
import './SearchBar.css';
import {getAccessToken,redirectToAuthCodeFlow,fetchProfile,get} from "../apisuthorization/autho"
 function SearchBar(props){
    
    const [song,setSong]=useState('');
    async function handleSubmit(e){
        e.preventDefault();
        props.onsubmit(song);
        /*
        console.log(props.auth);
        const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${props.auth}` }
    });

    const a =await result.json();
    console.log(a.id);
    const addp = await fetch(`https://api.spotify.com/v1/users/${a.id}/playlists`,{
        method:"POST", 
        headers: { 
        Authorization: `Bearer ${props.auth}`, 
        'Content-Type': 'application/json'},
        body:JSON.stringify({
        'name': "from javascript",
        'description': "New playlist description",
        'public': false
        
       })} )

       const b =await addp.json();
       console.log(b.id);
      
     const serchsong= await fetch(`https://api.spotify.com/v1/search?q=faded&type=track&limit=10`,{
        method: "GET", headers: { Authorization: `Bearer ${props.auth}` }
    });
    const c = await serchsong.json();
    //console.log(b.tracks.items[0].album.name);
    //console.log(b.tracks.items[0].artists[0].name);
    console.log(c.tracks.items[0].uri);
    console.log(c.tracks.items[1].uri);
    console.log(c.tracks.items[2].uri);
    let arrr =[];
    arrr.push(c.tracks.items[0].uri);
    arrr.push(c.tracks.items[2].uri);
    arrr.push(c.tracks.items[3].uri);
    console.log(arrr);
    const addtop = await fetch(`https://api.spotify.com/v1/playlists/${b.id}/tracks`,{
        method:"POST", 
        headers: { 
        Authorization: `Bearer ${props.auth}`, 
        'Content-Type': 'application/json'},
        body:JSON.stringify({
            "uris": 
            arrr
            ,
            "position": 0
        
       })} )
       const j = await addtop.json();*/
    }
    
    return (
        <>
        <form onSubmit={handleSubmit} className='formm'>
            <input type='text' name='song' id='song' value={song} onChange={(e)=>setSong(e.target.value)} className='searchtrack' placeholder='Enter Track Name'/>
            <input type='submit' value='Search' className='sbtn'/>

        </form>
        
        </>
    );
}
export default SearchBar;