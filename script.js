const accessKey="ZWYE9ntZX8F9i46B2qLahBf99RuITi0_djH2YkrmG94";

const formE1=document.querySelector("form");
const inputE1=document.getElementById("search-input");
const SearchResults=document.querySelector(".search-results");
const showMore=document.getElementById("show-more-button");

let inputData="";
let page=1;

 async function seacrchImages(){
    inputData=inputE1.Value;
    const url='https://api.unsplash.com/search/photo?page=${page}&query=${inputData}&client_id=$(accessKey)';

    const response=await fetch(url);
    const data =await response.json();

    const results =data.results;

    if(page==1){
        SearchResults.innerHTML="";

    }
    results.map((result)=>{
        const imagewrapper=document.createElement("div");
        imagewrapper.classList.add("search-result");
        const image =document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target"_blank";
        imageLink.textContent= result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imageLink);
        SearchResults.appendChild(imagewrapper);
    });

    page++;
    if(page>1){
        showMore.style.display="block";
    }
}

formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page =1;
    seacrchImages();
});
showMore.addEventListener("click",(event)=>{
   
    seacrchImages();
});
