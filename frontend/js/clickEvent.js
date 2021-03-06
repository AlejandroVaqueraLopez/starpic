gallery.addEventListener("click", (e) => {
    let btnAnchor = e.target;
    if(btnAnchor.dataset.target === "btnAnchor"){
        postData(btnAnchor.dataset.picAuthor,btnAnchor.dataset.picTitle,btnAnchor.dataset.picDate,btnAnchor.dataset.url);
        console.log("post")
    }else if(btnAnchor.dataset.target === "heartElement" ){
        btnAnchor = e.target.parentElement;
        postData(btnAnchor.dataset.picAuthor,btnAnchor.dataset.picTitle,btnAnchor.dataset.picDate,btnAnchor.dataset.url);
        console.log("post")
        
    }else{
        console.log("other element");
    }
});

const URLDB= "http://localhost:4400/api/favorite"
const postData = (picAuthor,picTitle,picDate,picURL) => {
    fetch(URLDB +"/"+ picDate, {
        method: "POST",
        //metadatos
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            "author" : picAuthor,
            "title" : picTitle,
            "date" : picDate, 
            "link" : picURL
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => {
            swal("Image added to the list")
        })
        .then(() => {
            render()
        })
        .catch(error => console.error(error))
}