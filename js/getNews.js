import myFetch  from "./fetch.js";
import createNews from "./createNews.js";



const getNewsPerPage = (pageNumber) => {
    // This uses the page id to update the news per id

    let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news"
    let urlForPage = url + "?page=" + pageNumber + "&limit=10"

    
    myFetch( urlForPage , "GET").then(
        allNews => {

        //In the document, we have to access the covering div of the news per page
        let section = document.getElementById("active_page")


        //This is to remove all content of the section covering div before updating
        section.innerHTML = ""
            for ( let i=0; i< allNews.length; i++){
                createNews(allNews[i])
            }
        }
    )
}




export default getNewsPerPage