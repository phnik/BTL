const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const listImages = document.querySelector('.list-images');

let currentIndex = 0; // Chỉ số ảnh hiện tại

// Di chuyển ảnh sang trái
btnLeft.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = listImages.children.length - 1; // Quay về ảnh cuối cùng
    }

    updateSlideshow();
});

// Di chuyển ảnh sang phải
btnRight.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= listImages.children.length) {
        currentIndex = 0; // Quay về ảnh đầu tiên
    }

    updateSlideshow();
});

// Cập nhật slideshow
function updateSlideshow() {
    const imageWidth = listImages.children[0].offsetWidth; // Lấy chiều rộng của ảnh
    const translateX = -imageWidth * currentIndex; // Tính giá trị translateX

    listImages.style.transform = `translateX(${translateX}px)`;
}

// Cập nhật slideshow ban đầu
updateSlideshow();



window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) { // Hiện nút khi cuộn xuống 100px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none'; // Ẩn nút khi cuộn lên đầu trang
    }
});

document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
});