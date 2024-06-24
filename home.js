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
});