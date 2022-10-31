function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

function onThumbnailClick(event){
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick(){
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}

const albumView = document.querySelector('#album-view');

for (let photoSrc of PHOTO_LIST){
   const image = createImage(photoSrc);
   image.addEventListener('click', onThumbnailClick)
    albumView.appendChild(image);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick)