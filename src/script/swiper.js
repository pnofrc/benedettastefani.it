import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

function initSwiper() {
    let spv = window.matchMedia('(max-width: 800px)').matches ? 1 : 2;

    if (spv === 2) {
        let segui = document.getElementById('description');
        document.addEventListener('mousemove', function (e) {
            segui.style.left = e.clientX + "px";
            segui.style.top = e.clientY + "px";
        });
    }

    new Swiper('.swiper', {
        slidesPerView: spv,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    document.querySelectorAll('.swiper-slide img').forEach((img) => {
        img.addEventListener('mouseover', function () {
            changeDescription(this.getAttribute('data-slug'), this.getAttribute('data-name'), this.getAttribute('data-description'));
        });

        img.addEventListener('click', function () {
            openSubGallery(this.getAttribute('data-slug'));
        });
    });
}

function changeDescription(slug, name, description) {
    document.getElementById('description').innerHTML = `<span>${name}</span><span>${description}</span>`;
}

function openSubGallery(slug) {
    document.getElementById(slug).style.display = 'flex';
}

if (typeof window !== 'undefined') {
    window.addEventListener('load', initSwiper);
}
