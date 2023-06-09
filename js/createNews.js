 // This function is to assemble all the news per page



 import updateNews from "./updateNews.js";
 
 import deleteNews from "./deleteNews.js";


 
const createNews = (newsObject) =>{
    
    // To access the details of each news item:
    let author = newsObject.author;
    let avatarUrl = newsObject.avatar;
    let title = newsObject.title.toUpperCase();
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
    img.setAttribute('alt', 'No available avatar');
    // append the image to the news div
    img.style.cursor = "pointer"
    newsDiv.appendChild(img);


    // create the first child div element
    const firstDiv = document.createElement('div');

    // create an h2 element
    const h2 = document.createElement('h2');
    // set the text content for the h2

    h2.style.cursor = "pointer"
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


    // create the second child div element
    const secondDiv = document.createElement('div');


    //Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete"

    // To add a functionality button
    deleteButton.addEventListener('click', () => {
        let answer = prompt("Are you sure you want to delete this?")
        if (answer.toLowerCase() == "yes" ){
            deleteNews(newsId)
        }else{
            alert("Deletion cancelled, type 'yes' if you want to delete")
        }
    });
    //Append to second div
    secondDiv.appendChild(deleteButton)


    //Create the update button
    const updateButton = document.createElement('button');
    updateButton.innerHTML = "Update"
    //Append to second div
    secondDiv.appendChild(updateButton)


    // Add functionality to the update button

    // Add the secondDiv to the newsDiv 
    newsDiv.appendChild(secondDiv)


    updateButton.addEventListener( 'click',  () => {
        // MAKE THE UPDATE FORM VISIBLE
        let updateNewsButton = document.getElementById("form")
        updateNewsButton.style.display = "block"

        updateNews(newsObject)
    } );



    // To add links to each newsItem img to navigate to the news.html file
    img.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = `/news.html?id=${newsObject.id}`;
    });

    // To add links to each newsItem img to navigate to the news.html file
    h2.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = `/news.html?id=${newsObject.id}`;
    });


    section.appendChild(newsDiv)

}



export default createNews