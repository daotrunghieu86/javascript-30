const item = document.querySelectorAll('.item input[type="checkbox"]');

item.forEach((click) => click.addEventListener("click", handleClick));

let lastCheck;

function handleClick(e) {
  let inBetween = false;
  //   console.log(e); // e là cái điểm, cái chỗ mình click vào bao gồm rất nhiều thông tin như:
  // MouseEvent {isTrusted: true, screenX: 2895, screenY: 270, clientX: 561, clientY: 186, …}

  //   console.log(e.shiftKey);
  //   console.log(this);
  // là cái 'click', item con của 'item'
  // vì cùng đặt trong cùng 1 <label> nên khi click vào chữ hay 'input check' đều được

  // check if they had the shift key down
  // and check that they are checking it
  if (e.shiftKey && this.checked) {
    item.forEach((item) => {
      if (item === this || item == lastCheck) {
        inBetween = !inBetween;
        // console.log("Yes");
      }
      if (inBetween) {
        item.checked = true;
        console.log(item);
        // this ở đây là tổ hợp của Shift+click
      }
    });
  }

  lastCheck = this;
  console.log(lastCheck);
  // This ở đây là checkbox vừa được click(k kèm Shift)
}
