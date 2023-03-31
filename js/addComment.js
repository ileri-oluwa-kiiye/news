import myFetch from "./fetch.js"


const addComment = () => {
    

    
    let addCommentButton = document.getElementById("form")
    addCommentButton.style.display = "block"


    // In case the cancel button is clicked instead

    let cancel = document.getElementById("cancel")
    cancel.addEventListener("click", () => {
        addCommentButton.style.display = "none"
    })


    //  On submit, we make sure the fields are correctly filled, then proceed to post the comment.
    addCommentButton.addEventListener('submit', (e) => {
        console.log("worked")
        // This  is to get all the values in the form
        let newname = document.getElementById("name").value
        let newAvatar = document.getElementById("avatar").value
        let newcomment = document.getElementById("comment").value

        if (newname=="" || newAvatar == "" || newcomment == "") {

            e.preventDefault()
            alert("Fill all the necessary fields before submitting")

            // addCommentButton.style.display = "none"
        }

        else{

            e.preventDefault()
            const urlParams = new URLSearchParams(window.location.search);
            const newsItemId = urlParams.get('id');

            

            let data = {
                "newsId" : newsItemId,
                "name" : newname,
                "avatar" : newAvatar,
                "comment" : newcomment
            }

            // console.log(data)

            let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/" + newsItemId + "/comments"

            // console.log(url)

            myFetch( url , "POST", data ).then(res => console.log(res));
            addCommentButton.style.display = "none"

        }

        newname, newAvatar, newcomment  = ""

        location.reload()
    })

}

export default addComment