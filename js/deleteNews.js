import myFetch from "./fetch";

const deleteNews = (id) => {

    // This is to get the url for deleting from the api 
    let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/" + id;
    console.log(url); 

    //Delete news item
    myFetch( url, "DELETE").then(res => console.log(res))

}


export default deleteNews