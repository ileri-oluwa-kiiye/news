import Pagination from "./pagination.js";
import addNews from "./addNews.js";





Pagination()
// The pagination function helps to make the news appear and make the next and back buttons work


let add = document.getElementById("addnews")

add.addEventListener('click', addNews)


