// import axios from 'axios';

// export const url = "http://localhost:8080";

// const fetchRequest = async (username, password,endpoint) => {
//     console.log("Fetching data from server...");
//     try {
//         const response = await axios.post(`${url}/${endpoint}`, {
//             username,
//             password
//         });

//         if(response.status == 200){
//             console.log("Login successful");
//         }
        
//         // If the login is successful, the server should return a JWT token
//         if (response.data.token) {
//             // Store the token in the local storage
//             localStorage.setItem('token', response.data.token);
//         }

//         return response.data;
//     } catch (error) {
//         console.error('Login failed:', error);
//     }
// };

// export default fetchRequest;