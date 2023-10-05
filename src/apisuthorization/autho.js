import React, { useEffect } from 'react';
const SpotifyAuth = ({ clientId, redirectUri, scopes, onSuccess }) => {
  useEffect(() => {
    const generateRandomString = (length) => {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
        for (let i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    const redirectToSpotifyAuthorizeEndpoint = () => {
      const state = generateRandomString(16);
      const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&scope=${encodeURIComponent(scopes.join(' '))}&state=${state}`;

      window.location.href = authorizationUrl;
    };

    const handleCallback = () => {
     // redirectToSpotifyAuthorizeEndpoint();

      const urlParams = new URLSearchParams(window.location.hash.substr(1));
     
      const accessToken = urlParams.get('access_token');
      const state = urlParams.get('state');

      if (accessToken && state) {
        // Call the onSuccess callback with the access token
        onSuccess(accessToken);
      }
      else{
        redirectToSpotifyAuthorizeEndpoint();
      }
    };
    setInterval(()=>{
       redirectToSpotifyAuthorizeEndpoint();
    },3600000);
    
   
      handleCallback();
      
    // Optionally, you can call redirectToSpotifyAuthorizeEndpoint() to trigger the authentication flow
    
  }, [clientId, redirectUri, scopes, onSuccess]);

  return null; // No need to render anything for this component
};


export default SpotifyAuth;