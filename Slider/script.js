const sliderImages = [
    {
        src: "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+1",
    },
    {
        src: "https://via.placeholder.com/800x400/33B5FF/FFFFFF?text=Image+2",
    },
    {
        src: "https://via.placeholder.com/800x400/8D33FF/FFFFFF?text=Image+3",
    },
    {
        src: "https://via.placeholder.com/800x400/FF33B5/FFFFFF?text=Image+4",
    },
    {
        src: "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Image+5",
    }
];
document.querySelector("#img").style.backgroundImage = `url("${sliderImages[0].src}")`

let i=0

document.getElementById("pre").addEventListener('click', ()=>{
    if(i==0){
        i = sliderImages.length-1
        document.querySelector("#img").style.backgroundImage = `url("${sliderImages[i].src}")`
    }else{
        i--
        document.querySelector("#img").style.backgroundImage = `url("${sliderImages[i].src}")`
    }
})
document.getElementById("next").addEventListener('click', ()=>{
    if(i == sliderImages.length-1){
        i=0
        document.querySelector("#img").style.backgroundImage = `url("${sliderImages[i].src}")`
    }else{
        i++
        document.querySelector("#img").style.backgroundImage = `url("${sliderImages[i].src}")`
    }
})