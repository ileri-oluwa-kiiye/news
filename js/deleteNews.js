import myFetch from "./fetch.js";

const deleteNews = async (id) => {
    //THis function is used to delete the selected news by using the id


    // This is to get the url for deleting from the api 
    let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/" + id;
    console.log(url); 

    let type = "DELETE"

    //Delete news item 
    myFetch(url, type )
    
}



export default deleteNews