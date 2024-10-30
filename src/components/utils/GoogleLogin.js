import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const GoogleLogin = () => {
  const responseGoogle = (response) => {
    console.log(response);
    let tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default'
    };
    axios.post('http://localhost:8080/api/login', options)
      .then(response => {
        console.log(response);
      });
  }

  return (
    <div className="Login">
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default GoogleLogin;
