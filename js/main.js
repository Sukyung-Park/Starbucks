const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("to-top");
// 스크롤하게되면 '스크롤!'문자표가 출력됨

// 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지
// 스크롤에서 많이 사용됨!
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지숨기기
      // badgeEl.style.display = 'none';

      // gsap.to(애니메이션 요소, 지속시간, 옵션) 넣어야함
      // 0.6초에 걸쳐서 0으로 점점 투명해질것임
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        // 화면이 진짜로 사라지게해주려면 display값을 추가해줘야함
        display: "none",
      });
      // 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // 배지보이기
      // badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// //_.throttle(함수 , 시간)

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
// function 함수안에 요소를 적고 반복되는 횟수를 index로 적는다.
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1,4, 2.1, 2.8
    opacity: 1,
  });
});

// 공지사항 움직이는 라이브러리
// new Swiper(선택자, 옵션)
new Swiper(".notice-Line .swiper-container", {
  // 수직
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  // 수평 스와이퍼은 디렉션 설정 안해도됨
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetWeen: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, //0.5초에 한번씩 슬라이드
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  // 요소를 선택할 수 있게 입력했음
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gasp.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자를 받고
    random(1.5, 2.5),
    {
      // 애니메이션 동작 시간
      // 옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 15);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
