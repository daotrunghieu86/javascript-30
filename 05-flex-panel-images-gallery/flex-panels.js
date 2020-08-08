// METHOD 1
// const nancy = document.querySelectorAll(".panel");

// function zoomNude() {
//   // 1.1
//   //   deleteZoom();
//   //   this.classList.add("show");

//   // 1.2
//   this.classList.toggle("show");
//   // console.log(this.className);
// }

// function pZoom() {
//   this.classList.toggle("active");
// }

// function deleteZoom() {
//   nancy.forEach((item) => item.classList.remove("show"));
// }

// nancy.forEach((item) => item.addEventListener("click", zoomNude));
// nancy.forEach((item) => item.addEventListener("transitionend", pZoom));

// METHOD 2
// const panel = document.querySelectorAll(".panel");
// // console.log(panel);

// function toggleOpen() {
//   // console.log('hell0');
//   this.classList.toggle("open");
//   //   this.classList.toggle('active');
// }

// function toggleTransition(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes("flex")) {
//     this.classList.toggle("active");
//   }
//   // e để truy suất vào các thuộc tính

//   // console.log(this.className);
//   // if (this.className.includes('open')){
//   //     this.classList.toggle('active');
//   // }

//   // this.classList.toggle('active');
// }

// panel.forEach((item) => item.addEventListener("click", toggleOpen));
// panel.forEach((item) =>
//   item.addEventListener("transitionend", toggleTransition)
// );

// METHOD 3

// "active" là hiệu ứng chữ chạy lên xuống
// "open" là hiệu ứng mở rộng width
const panel = document.querySelectorAll(".panel");

function toggleOpen() {
  panel.forEach((item) => {
    if (item.classList[1] === "open") {
      item.classList.remove("open");
      item.classList.remove("active");
    }
  });

  this.classList.add("open");
}

function toggleTransition() {
  // 3.1 làm thế này thì active sẽ đảm bảo 'active' và 'open' luôn đi cùng nhau
  if (!this.className.includes("open")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }

  // 3.2: hơi khó giải thích nhưng nếu làm thế này thì 'active' sẽ không bị xóa đi
  // this.classList.add("active");
}

panel.forEach((item) => {
  item.addEventListener("click", toggleOpen);
  item.addEventListener("transitionend", toggleTransition);
});
