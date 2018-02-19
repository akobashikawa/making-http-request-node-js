const axios = require("axios");

const url = "http://localhost:4200/graphql";
// const data = JSON.stringify({ query: `query { beta }` });
const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
};

const getResult = async (url) => {
    try {
        const response = await axios({
            url,
            headers,
            method: "POST",
            data: JSON.stringify({ query: `query { hello }` }) // not work as const
        });
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getResult(url);