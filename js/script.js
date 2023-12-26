// function to show image when we click on a image
function showImage(imageSrc) {
  let popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
   
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
}
// function to hide the image when we click on cross button
function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
 document.body.style.overflow = "auto";
}



const burger = document.querySelector('#burger');

const men=document.querySelector('#men');

burger.addEventListener('click', () => {

	men.classList.toggle('disp');

});