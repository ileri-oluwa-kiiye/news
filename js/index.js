import getNewsPerPage from "./getNews.js";

const Pagination = () => {
    let pageCount = document.getElementById("page_count");


    //This is the link to the previous page
    let previousPage = document.getElementById("previous_page")
    previousPage.style.display = "none"

    //This is the link to the next page
    let nextPage = document.getElementById("next_page")


    //The event listener to go to the previous news page
    previousPage.addEventListener('click', () => {
        if (pageCount.innerHTML > 1) {
            nextPage.style.display = "block"
            pageCount.innerHTML -- 
            getNewsPerPage(pageCount.innerHTML)
        } else{
            previousPage.style.display = "none"
            alert("You've reached the first page")
        }
    });

    // The event listener to move to the next news page
    nextPage.addEventListener('click', () => {
        if (pageCount.innerHTML < 6) {
            previousPage.style.display = "block"
            pageCount.innerHTML ++ 
            getNewsPerPage(pageCount.innerHTML)
        } else{
            nextPage.style.display = "none"
            alert("You've reached the last page")
        }
    });

    getNewsPerPage(pageCount.innerHTML)


    //To make the page refresh every 2 seconds
    // setInterval(() =>(

    //     getNewsPerPage(pageCount.innerHTML)
    // ), 3000)

}





Pagination()