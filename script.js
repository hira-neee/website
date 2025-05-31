function showMore() {
  document.getElementById("moreInfo").classList.toggle("hidden");
}

// 👇 Đây là hiệu ứng loader khi web vừa load
window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = "none", 500);
});

// 👇 Đây là hiệu ứng thanh thông báo biến mất sau 5 giây (nếu muốn)
setTimeout(() => {
  const bar = document.getElementById("notifyBar");
  if (bar) {
    bar.style.transition = "top 0.5s, opacity 0.5s";
    bar.style.top = "-50px";
    bar.style.opacity = "0";
  }
}, 5000);
