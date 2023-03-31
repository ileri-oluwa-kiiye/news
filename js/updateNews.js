import myFetch from "./fetch.js"


const updateNews = (newsObject) => {
    
    //Get all parameters in the news object
    let author = newsObject.author;
    let avatarUrl = newsObject.avatar;
    let title = newsObject.title.toUpperCase();
    let url = newsObject.url
    let newsId = newsObject.id

    
    // Let the input contain their values for easy changes 
    document.getElementById("author").value = author
    document.getElementById("avatar").value = avatarUrl
    document.getElementById("title").value = title
    document.getElementById("url").value = url


    // In case the cancel button is clicked instead
    let cancel = document.getElementById("cancel")
    cancel.addEventListener("click", () => {
        e.preventDefault()
        updateNewsButton.style.display = "none"
    })


    let updateNewsButton = document.getElementById("form")


    //  On submit, we make sure the fields are correctly filled, then proceed to post the news.
    updateNewsButton.addEventListener('submit', (e) => {
        console.log("worked")
        let newAuthor = document.getElementById("author").value
        let newAvatar = document.getElementById("avatar").value
        let newTitle = document.getElementById("title").value
        let newUrl = document.getElementById("url").value


        if (newAuthor=="" || newAvatar == "" || newTitle == "" || newUrl == "") {
            e.preventDefault()
            alert("Fill all the necessary fields before submitting")
            updateNewsButton.style.display = "none"
        }

        else{
            e.preventDefault()

            let data = {
                "author" : newAuthor,
                "avatar" : newAvatar,
                "title" : newTitle,
                "url" : newUrl
            }

            let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/" + newsId

            myFetch( url , "PUT", data ).then(res => console.log(res));
            updateNewsButton.style.display = "none"

        }

        newAuthor, newAvatar, newTitle, newUrl  = ""
    })

}

export default updateNews