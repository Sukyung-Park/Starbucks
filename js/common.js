const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  // html 속성을 지정할떄
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// 포커스가 해제되었을 때
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  // html 속성을 지정할떄
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
// 년도를 넣어주는 자바스크립트
