import myFetch  from "./fetch.js";


myFetch("https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/5/comments", "GET").then(res => console.log(res));

