
function searchPhoto(){
    let clientId = "nPA0dgu97aL1voBUZ5qGu3_za4gJud2P1ObkwivsNQA"
    let query = document.getElementById('search').value
    let url = "https://api.unsplash.com/search/photos/?client_id="+clientId+"&query="+query;

    fetch(url)
    .then((response)=>{ 
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        // data.results.forEach(photo => {
            // let result = `
            // <img src="${photo.urls.regular}">
            // `;
            // $('#result').append(result);
            loadImages(data);
          

    })
    loadImages = (data) => {
        for(let i = 0;i < data.results.length;i++){
          let image = document.createElement("div");
          image.className = "img";
          image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
          image.addEventListener("dblclick", function(){
            window.open(data.results[i].links.download, '_blank');
          })
          document.querySelector("#grid").appendChild(image);
        }}

}