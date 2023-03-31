
const newsImg = (image) => {

    // create an image element
    const img = document.createElement('img');

    // set the src attribute for the image
    img.setAttribute('src', image);
    // set the alt attribute for the image

    img.setAttribute('alt', 'Image');
    // append the image to the img div
    
    //create a div element
    const div = document.createElement('div');

    div.setAttribute('class', 'carousel__item');
    // set the class attribute for the div

    div.appendChild(img)



  

    




    let outerDiv =  document.getElementById("images")
    outerDiv.appendChild(div)

    //    document.getElementById("images").appendChild(div)

    //    console.log(img)

       console.log(outerDiv)


}


export default newsImg