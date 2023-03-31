import myFetch from "./fetch.js"


const addNews = () => {
    

    
    let addNewsButton = document.getElementById("form")
    addNewsButton.style.display = "block"


    // In case the cancel button is clicked instead
    let cancel = document.getElementById("cancel")
    cancel.addEventListener("click", () => {
        e.preventDefault()
        addNewsButton.style.display = "none"
    })


    //  On submit, we make sure the fields are correctly filled, then proceed to post the news.
    addNewsButton.addEventListener('submit', (e) => {
        console.log("worked")
        // This  is to get all the values in the form
        let newAuthor = document.getElementById("author").value
        let newAvatar = document.getElementById("avatar").value
        let newTitle = document.getElementById("title").value
        let newUrl = document.getElementById("url").value

        if (newAuthor=="" || newAvatar == "" || newTitle == "" || newUrl == "") {

            e.preventDefault()
            alert("Fill all the necessary fields before submitting")

            // addNewsButton.style.display = "none"
        }

        else{


            e.preventDefault()

            let data = {
                "author" : newAuthor,
                "avatar" : newAvatar,
                "title" : newTitle,
                "url" : newUrl
            }

            let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/"

            myFetch( url , "POST", data ).then(res => console.log(res));
            addNewsButton.style.display = "none"

        }

        newAuthor, newAvatar, newTitle, newUrl  = ""
    })

}

export default addNews