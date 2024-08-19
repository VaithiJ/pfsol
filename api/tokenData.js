// Node.js (using axios)
const axios = require('axios');

const url = "https://pumpapi.fun/api/get_newer_mints";
const params = { limit: 10 };  // Optional parameter to limit results

axios.get(url, { params })
    .then(response => {
        if (response.status === 200) {
            console.log(response.data);  // Process the JSON response
        } else {
            console.error(`Error retrieving data: ${response.status}`);
        }
    })
    .catch(error => {
        console.error(error);
    });
