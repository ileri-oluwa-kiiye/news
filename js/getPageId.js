
const getPageId =() =>{
    const urlParams = new URLSearchParams(window.location.search);
    const newsItemId = urlParams.get('id');
}

export default getPageId