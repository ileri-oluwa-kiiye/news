import myFetch  from "./fetch.js";
import createNews from "./createNews.js";


// myFetch("https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/5/comments", "GET").then(res => console.log(res));




// const getAllNews = () => {

//     myFetch("https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/", "GET").then(
//         allNews => {
//             console.log(allNews)
//         }
//     )
// }



const getNewsPerPage = (pageNumber) => {
    // This uses the page id to update the news per id

    let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news"
    let urlForPage = url + "?page=" + pageNumber + "&limit=10"


   




    
    myFetch( urlForPage , "GET").then(
        allNews => {
            for ( let i=0; i< allNews.length; i++){
                createNews(allNews[i])
            }

            // allNews[i].addEventListener('click', (event) => {
            //     event.preventDefault();
            //     window.location.href = `/trial/news.html?id=${allNews[i].id}`;
            // });
        }
    )
}




export default getNewsPerPage