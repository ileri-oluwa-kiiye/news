 // This function is to assemble all the news per page



import deleteComment from "./delComment.js";


 
const createComment = (commentObject) =>{
    
    // To access the details of each news item:
    let comment = commentObject.comment;
    let newsId = commentObject.newsId;
    // let avatarUrl = commentObject.avatar;
    // let name = commentObject.name


    //In the document, we have to access the covering div of the news per page
    let commentsDiv = document.getElementById("comments")
    // console.log(section)


    //Creating the html div for the news and its elements
    const newsDiv = document.createElement('div');
    // set the class attribute for the div
    newsDiv.setAttribute('class', 'comment');
    // set the id attribute for the div
    newsDiv.setAttribute('id', newsId);

    //Create an input element
    const input = document.createElement('input');
    //Set the type of the input
    input.setAttribute('type', "text");
    //Let them bear the value of the comment
    input.value = comment
    
    //Add the input to the div
    newsDiv.appendChild(input)
    
    //Create the span element
    const span = document.createElement('span');


    // // create the first image element
    // const editBtn = document.createElement('img');
    // // set the src attribute for the image
    // editBtn.setAttribute('src', "img/edit.png");
    // // set the alt attribute for the image
    // editBtn.setAttribute('alt', 'Edit');
    // // append the image to the news div
    // editBtn.style.cursor = "pointer"
    // span.appendChild(editBtn);


    // create the first image element
    const delBtn = document.createElement('img');
    // set the src attribute for the image
    delBtn.setAttribute('src', "img/delete.png");
    // set the alt attribute for the image
    delBtn.setAttribute('alt', 'Delete');
    // append the image to the news div
    delBtn.style.cursor = "pointer"


    // To add a functionality to the delete


    span.appendChild(delBtn);



    // editBtn.addEventListener( 'click',  editComment(commentObject, input) );


    newsDiv.appendChild(span)
    commentsDiv.appendChild(newsDiv)


    delBtn.addEventListener('click', () => {
        deleteComment(commentObject)
    } );

}



export default createComment