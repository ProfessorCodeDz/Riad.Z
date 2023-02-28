// open projects
view.onclick = () => {
    // show projects elements
    projects.style.display = 'block' 
    layer1.style.display = 'block'    
    layer2.style.display = 'block'  
    setTimeout(() => {
        closebtn.style.display = "block"
        // open delay
        projects.style.transitionDelay = '.4s' 
        layer2.style.transitionDelay = '0s' 
        // open
        projects.style.right = '0' 
        layer1.style.right = '0'    
        layer2.style.right = '0'  
    }, 200);
}

// close projects
closebtn.onclick = () => {
    // close delay
    projects.style.transitionDelay = '0s' 
    layer2.style.transitionDelay = '.4s' 
    // close
    projects.style.right = '-100%' 
    layer1.style.right = '-100%'    
    layer2.style.right = '-100%'
    setTimeout(() => {
        // delete projects elements
        projects.style.display = 'none' 
        layer1.style.display = 'none'    
        layer2.style.display = 'none'  
        closebtn.style.display = "none"
    }, 1000); 
}


// open images 
let images = document.querySelectorAll(".projects .project .img img")

images.forEach(image => {
    image.onclick = () => {
        imageViewer.style.visibility = "visible"
        document.querySelector("#imageViewer img").src = image.src
    }
})
imageViewer.onclick = () => {
    imageViewer.style.visibility = "hidden"
}

// delete loader
window.onload = () => {
    loader.remove()
}
