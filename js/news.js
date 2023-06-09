import myFetch  from "./fetch.js";
//import the module required to fetch data from the api

import addComment from "./addComment.js";
import newsImg from "./newsImg.js";
import createComment from "./createComment.js";
import carousel from "./carousel.js";




//This function  is to update the Data in this page.
const updatePage = () => {

    //To get the unique id of the page
    const urlParams = new URLSearchParams(window.location.search);
    const newsItemId = urlParams.get('id');

    //To update the header
    let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/" + newsItemId;
    myFetch( url , "GET")
        .then(newsItem => {

            //Update the title of the news
            let title = document.getElementById("title")
            title.innerHTML = newsItem.title.toUpperCase();

            //Update the author of the news
            let author = document.getElementById("author")
            author.innerHTML = "By: " + newsItem.author;
    });


    

    //TO update the image slider
    let urlImage = url + "/images"
    myFetch( urlImage , "GET")
        .then(newsItem => {
            for ( let i=0; i< newsItem.length; i++){


                // console.log(newsItem[i].image)

                newsImg(newsItem[i].image)

            }

            carousel()
    });
    




    //To get comments based on Id
    let urlComment = url + "/comments"
    myFetch( urlComment , "GET")
        .then(newsIteem => {
            for ( let i=0; i< newsIteem.length; i++){
                createComment(newsIteem[i])
            }
    });
}


updatePage()


document.getElementById("addcomment").addEventListener( "click", addComment )


setInterval( updatePage, 60000)