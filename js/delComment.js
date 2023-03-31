import myFetch from "./fetch.js";

const deleteComment = (commentObject) => {
    // THis function is used to delete the selected comment by using the id

    let commentId = commentObject.id;

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');


    // This is to get the url for deleting from the api 
    let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/" + id + "/comments/" + commentId;
    // console.log(url); 

    let type = "DELETE"

    console.log(url)

    //Delete news item 
    myFetch(url, type )
    setTimeout( () => {
        location.reload();
    } , 2000)




}

export default deleteComment