import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const originalGalleryEl = galleryItems.map((image) => {
   return `<a class="gallery__item" href="${image.original}">
     <img
       class="gallery__image"
       src="${image.preview}"
       data-source="${image.original}"
       alt="${image.description}"
     />
   </a>
   `
}).join("");
galleryEl.insertAdjacentHTML("beforeend", originalGalleryEl);

galleryEl.addEventListener("click", event => {
  event.preventDefault();
const imageGallery = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
imageGallery.show();
document.body.addEventListener("keydown", event => {
  imageGallery.close();
})
});
