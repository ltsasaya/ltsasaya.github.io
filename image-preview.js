const preview = document.querySelector('#image-preview');
const frame = preview.querySelector('.preview-image');
const closeButton = preview.querySelector('.preview-close');
const gallery = preview.querySelector('.preview-gallery');
let opener;

function selectImage(source, selectedButton) {
  const image = source.cloneNode();
  image.removeAttribute('loading');
  frame.replaceChildren(image);
  gallery.querySelectorAll('button').forEach(button => {
    button.setAttribute('aria-pressed', String(button === selectedButton));
  });
  // Scroll only the thumbnail strip, leaving the page and modal in place.
  const left = selectedButton.offsetLeft;
  if (left < gallery.scrollLeft) gallery.scrollLeft = left;
  else if (left + selectedButton.offsetWidth > gallery.scrollLeft + gallery.clientWidth) {
    gallery.scrollLeft = left + selectedButton.offsetWidth - gallery.clientWidth;
  }
}

document.querySelectorAll('.image-drawer').forEach(drawer => {
  const shots = drawer.querySelectorAll('.project-shot');
  shots.forEach((shot, index) => shot.style.setProperty('--stack-order', shots.length - index));
});

document.querySelectorAll('.project-shot').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    gallery.replaceChildren();
    let selected;
    button.closest('.image-drawer').querySelectorAll('.project-shot').forEach(shot => {
      const source = shot.querySelector('img');
      const thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'preview-thumb';
      thumb.setAttribute('aria-label', source.alt);
      const image = source.cloneNode();
      image.alt = '';
      image.removeAttribute('loading');
      thumb.append(image);
      thumb.addEventListener('click', () => selectImage(source, thumb));
      gallery.append(thumb);
      if (shot === button) selected = thumb;
    });
    document.body.classList.add('preview-open');
    preview.showModal();
    selectImage(button.querySelector('img'), selected);
    closeButton.focus({ preventScroll: true });
  });
});

closeButton.addEventListener('click', () => preview.close());
preview.addEventListener('click', event => {
  if (event.target === preview || event.target === frame) preview.close();
});
preview.addEventListener('close', () => {
  document.body.classList.remove('preview-open');
  opener?.focus({ preventScroll: true });
});
