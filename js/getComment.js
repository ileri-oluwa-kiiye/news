import myFetch  from "./fetch.js";
import createComment from "./createComment.js";




const getComment = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // This uses the page id to update the news per id
    let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news" + pageId + "/comments"

    
    myFetch( url , "GET").then(
        allComments => {

        //In the document, we have to access the covering div of the news per page
        let commentsDiv = document.getElementById("comments")


        //This is to remove all content of the section covering div before updating
        commentsDiv.innerHTML = ""
            for ( let i=0; i< allComments.length; i++){
                createComment(allComments[i])
            }
        }
    )
}




export default getComment