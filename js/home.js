<<<<<<< HEAD
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
=======
const listImage = document.querySelector('.list-images');
const imgs = document.querySelectorAll('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let current = 0;
let slideInterval; // Biến lưu trữ setInterval

const handleChangeSlide = () => {
  if (current === imgs.length - 1) {
    current = 0;
  } else {
    current++; 
  }
  const imgWidth = imgs[0].offsetWidth;
  listImage.style.transform = `translateX(-${imgWidth * current}px)`;
};

// Khởi tạo setInterval ban đầu
slideInterval = setInterval(handleChangeSlide, 10000);

btnRight.addEventListener('click', () => {
  clearInterval(slideInterval); // Clear interval cũ
  handleChangeSlide(); // Chuyển ảnh ngay lập tức
  slideInterval = setInterval(handleChangeSlide, 10000); // Tạo interval mới
});

btnLeft.addEventListener('click', () => {
  clearInterval(slideInterval); // Clear interval cũ
  // Điều chỉnh logic chuyển ảnh về trước
  if (current === 0) {
    current = imgs.length - 1; // Quay về ảnh cuối cùng
  } else {
    current--; // Chuyển về ảnh trước
  }
  const imgWidth = imgs[0].offsetWidth;
  listImage.style.transform = `translateX(-${imgWidth * current}px)`;
  slideInterval = setInterval(handleChangeSlide, 10000); // Tạo interval mới
>>>>>>> bda58862b34af5a7dfacacc39f652b5c60d0f359
});