import {RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import storageService from './services/storage-service'
import { REFRESH_TOKEN_CHEKING_INTERVAL } from './shared/constants'
import authenticationService from './services/authentication-service'
import { ResponseData } from './services/apiTypes'


const tokenCheck = async () => {
  if (!storageService.retrieveAccessToken()) {
    return;
  }

  const expiration = storageService.retrieveTokenExpiresDate();
  const now = new Date(Date.now() + REFRESH_TOKEN_CHEKING_INTERVAL);

  if (expiration! < now) {
    try {
      const refreshToken = storageService.retrieveRefreshToken();
       
      if(!refreshToken){
        console.log('Refesh token missing. Redirect to login');
        storageService.deleteUserData();
        return;
      }
      
      const response = await authenticationService.renewToken(
        storageService.retrieveAccessToken(), // Pass the current access token
        refreshToken // Pass the refresh token
      );
      
      const responseData = response.data as unknown as ResponseData;
      const newAccessToken = responseData.accessToken;
      const newRefreshToken = responseData.refreshToken;
      const newExpiration = responseData.expiration;
      storageService.saveAccessToken(newAccessToken);
      storageService.saveRefreshToken(newRefreshToken);
      storageService.saveTokenExpiresDate(newExpiration);

    } catch (error) {
      // Handle errors during token refreshing
      console.error('Error refreshing access token:', error);
      storageService.deleteUserData();
      // You might also want to add code here to redirect to the login page
    }
  }
};

// Call the tokenCheck function once immediately
await tokenCheck();

// Set up an interval to call the tokenCheck function periodically
setInterval(tokenCheck, REFRESH_TOKEN_CHEKING_INTERVAL);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={App}/>
  </React.StrictMode>
)
