
const key= "l7iyIpVsowrInfdflY0ON9ywQFHMb8aEicUllh4A"
const URL = "https://api.nasa.gov/planetary/apod?api_key=l7iyIpVsowrInfdflY0ON9ywQFHMb8aEicUllh4A&start_date=2022-01-01&end_date=2022-01-20"
const gallery = document.getElementById("content-gallery")

const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.forEach((element) => {
                if(element.media_type !== "video"){
                    printPictures(element.url)
                    console.log(element)
                }
                
            });
        })
        .catch(error => console.error(error))
}
getData()

const printPictures = (picURL)=>{
    let div = document.createElement("div")
    div.classList.add("card")
    div.classList.add("col")
    div.classList.add("m-1")
    div.classList.add("bg-dark")
    gallery.appendChild(div)

    let img = document.createElement("img")
    img.classList.add("card-img-top")
    img.src=picURL
    div.appendChild(img)

    let divBody =  document.createElement("div")
    divBody.classList.add("card-body")
    div.appendChild(divBody)

    let title =  document.createElement("h5")
    title.classList.add("card-title")
    title.innerHTML="Title"
    divBody.appendChild(title)

    let info =  document.createElement("p")
    info.innerHTML="INFO"
    divBody.appendChild(info)

    let anchor = document.createElement("a")
    anchor.classList.add("btn")
    anchor.classList.add("bg-light")
    anchor.dataset.target = "btnAnchor";//to identify the element
    anchor.dataset.url = picURL;//sets the current item image
    divBody.appendChild(anchor)

    let heart =  document.createElement("i")
    heart.classList.add("bi")
    heart.classList.add("bi-heart-fill")
    heart.dataset.target = "heartElement";//to identify the elementc
    anchor.appendChild(heart)
    
}