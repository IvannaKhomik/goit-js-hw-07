import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

galleryEl.addEventListener("click", OnClickModalOpen);
function OnClickModalOpen(e) {
  e.preventDefault();

  const isGalleryLink = e.target.classList.contains("gallery__image");
  if (!isGalleryLink) {
    return;
  }
  const instance = basicLightbox.create(
    `
	<img src="${e.target.dataset.source}">`,
    {
      onShow: (instance) => {
        galleryEl.addEventListener("keydown", OnClickModalClose);
        function OnClickModalClose(e) {
          if (e.key === "Escape") {
            instance.close();
            galleryEl.removeEventListener("keydown", OnClickModalClose);
          }
          return;
        }
      },
    }
  );
  instance.show();
}
