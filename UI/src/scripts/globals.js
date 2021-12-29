//function to display or hide image based on selection
export default function showImage(index) {
  let images = document.getElementsByClassName('slideshow')
  //if there are more than 1 image than hide/show new image
  if (images.length > 1) {
    for (let i = 0; i < images.length; i++) {
      if (i === index) {
        images[i].classList.add('w3-show')
        images[i].classList.remove('w3-hide')
      } else {
        images[i].classList.remove('w3-show')
        images[i].classList.add('w3-hide')
      }
    }
  }
}