import myFetch  from "./fetch.js";


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


    // This function is to assemble all the news per page
    const createNews = (newsObject) =>{


        // To access the details of each news item:
        let author = newsObject.author;
        let avatarUrl = newsObject.avatar;
        let title = newsObject.title;
        let url = newsObject.url
        let newsId = newsObject.id


        //In the document, we have to access the covering div of the news per page
        let section = document.getElementById("active_page")
        // console.log(section)



        //Creating the html div for the news and its elements
        const newsDiv = document.createElement('div');
        // set the class attribute for the div
        newsDiv.setAttribute('class', 'news');
        // set the id attribute for the div
        newsDiv.setAttribute('id', newsId);


        // create an image element
        const img = document.createElement('img');
        // set the src attribute for the image
        img.setAttribute('src', avatarUrl);
        // set the alt attribute for the image
        img.setAttribute('alt', 'Avatar');
        // append the image to the news div
        newsDiv.appendChild(img);


        // create the first child div element
        const firstDiv = document.createElement('div');


        // create an h2 element
        const h2 = document.createElement('h2');
        // set the text content for the h2
        h2.innerHTML = title ;
        // append the h2 to the first div
        firstDiv.appendChild(h2);



        // create a p element
        const p = document.createElement('p');
        // set the text content for the p
        p.textContent = 'By: ' + author;
        // append the p to the first div
        firstDiv.appendChild(p);


        // create a link element
        const a = document.createElement('a');
        // set the href attribute for the link
        a.setAttribute('href', url)
        //Adding the text within the a element
        a.innerHTML = "View the news at its URL"
        // append the a to the first div
        firstDiv.appendChild(a);

        // Add the firstDiv to the newsDiv 
        newsDiv.appendChild(firstDiv)
        console.log(firstDiv)



        //To add links to each newsItem
        // section.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     window.location.href = `/trial/news.html?id=${newsObject.id}`;
        // });


        //To erase all the former news present in the page
        // section.innerHTML = ""


        // <div class="news" id="1">
        //     <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/127.jpg" alt="Avatar">
        //     <div>
        //         <h2>Voluptatum Assumenda Cumque</h2>
        //         <p>By: Angelo Fadele</p>
        //         <a href="http://sore-sushi.info">View the news at its URL</a>
        //     </div>
        //     <div>
        //         <button>Delete</button>
        //         <button>Update</button>
        //     </div>
        // </div>

        // create a new div element













        section.appendChild(newsDiv)
        console.log(author, avatarUrl, title, url, newsId)
    }




    
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