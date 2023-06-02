window.onload = () => {
    // loading screen
    let top = document.querySelector(".top")
    let right = document.querySelector(".right")
    let bottom = document.querySelector(".bottom")
    let left = document.querySelector(".left")
    let top2 = document.querySelector(".top2")
    
    top.style.top = '-50%'
    top2.style.top = '-50%'
    right.style.right = '-50%'
    bottom.style.bottom = '-50%'
    left.style.left = '-50%'

    setTimeout(() => {
        document.querySelector(".loading").remove()
    }, 2000);

    // preview images    
    document.querySelectorAll(".project .img img").forEach(img => {
        img.onclick = e => {
            if(img.classList.contains("previewImg")){
                img.classList.remove("previewImg")
                document.querySelector(".preview").style.display = "none"
            }else{
                img.classList.add("previewImg")
                document.querySelector(".preview").style.display = "block"
            }    
        }
    })
}
