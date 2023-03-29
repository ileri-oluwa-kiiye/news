// import myFetch  from "./fetch.js";
import getNewsPerPage from "./getNews.js";


// myFetch("https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/5/comments", "GET").then(res => console.log(res));


function Pagination() {
    // This function is to aid pagiantion 


    //This is the link to the previous page
    var previousPage = document.getElementById("previous_page")
    //Making the default displat to none and updating it if the pageCOunt is more than one
    previousPage.style.display = "none";

    previousPage.addEventListener('click', (event) => {
        if (pageCount > 2) {
            pageCount ++
        }
    });

    var pageCount = document.getElementById("page_count").innerHTML

    if (pageCount < 2) {
        previousPage.style.display = "block"
    }


    getNewsPerPage(pageCount)
    
}


Pagination()