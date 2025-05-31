function showMore() {
  document.getElementById("moreInfo").classList.toggle("hidden");
}

setTimeout(() => {
  const bar = document.getElementById("notifyBar");
  bar.style.transition = "top 0.5s, opacity 0.5s";
  bar.style.top = "-50px";
  bar.style.opacity = "0";
}, 5000); // 5 giây sau biến mất
