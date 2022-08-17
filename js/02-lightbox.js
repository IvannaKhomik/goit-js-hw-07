import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}
galleryEl.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

galleryEl.addEventListener("click", OnClickModalOpen);

function OnClickModalOpen(e) {
  e.preventDefault();

  const isGalleryLink = e.target.classList.contains("gallery__image");
  console.log(isGalleryLink);
  if (!isGalleryLink) {
    return;
  }
  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    preloading: false,
  });
  gallery.open();
}
