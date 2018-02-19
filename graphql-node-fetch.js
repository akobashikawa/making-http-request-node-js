const fetch = require("node-fetch");

const url = "http://localhost:4200/graphql";
const data = JSON.stringify({ query: `query { hello }` });
const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
};

const getResult = async (url) => {
    try {
        const response = await fetch(url, {
            headers,
            method: "POST",
            body: data
        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};

getResult(url);