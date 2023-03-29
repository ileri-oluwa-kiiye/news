import myFetch from "./fetch"


const updateNews = (id, data) => {
    let url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/" + id;

    // data = {
    //     "author" : "Name",
    //     "avatar" : "urlAvatar",
    //     "title" : "Title",
    //     "url" : "url"
    // }

    
    myFetch(url, "PUT", data).then(res => console.log(res))

}

export default updateNews