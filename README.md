# Jeju_Responsive_web
비짓제주 웹사이트를 반응형으로 리뉴얼하였습니다.

> 비짓제주 웹사이트의 정보 구조와 UI/UX를 분석하고 개선
> 사용자에게 필요한 정보를 직관적으로 제공하여 사용성과 접근성 향상

## 🖥️ 프로젝트 소개

### 개발 배경
```text
여행 전뿐만 아니라 여행 중에도 장소와 관광 정보를 편리하게 확인할 수 있는
웹사이트의 필요성을 느껴 비짓제주 웹사이트를 선정하여 리뉴얼을 진행하였습니다.
```
### 프로젝트 목표
```text
기존 웹사이트의 복잡한 정보 구조와 투박한 레이아웃을 개선하고,
필요한 정보를 직관적으로 탐색할 수 있도록 UI/UX와 반응형 환경을 구축하는 것을 목표로 하였습니다. 
```

## ✨ 주요 기능

- 메인 / 서브 / 상세 / 로그인 페이지 구현
- 관광 콘텐츠 및 여행 정보 탐색 기능 구현
- PC / Tablet / Mobile 반응형 레이아웃 구현
- 반응형 인터랙션 및 콘텐츠 슬라이더 구현

## 🛠️ 기술 스택

### Markup
- HTML5
- CSS3
- SCSS

### Frontend
- JavaScript
- jQuery
- Slick
- Gsap
- Swiper

### Tools
- GitHub
- Figma

  
## 📁 프로젝트 구조
```text
jeju
├─ css
├─ images
├─ js
└─ login
   ├─ find_id.html
   ├─ find_pw.html
   ├─ login.html
   └─ signup.html
├─ index.html
├─ login.html
└─ sub_page.html
```

## 📋 에피소드

### 01. 반응형 슬라이더 구현
PC에서는 Slick을 적용하고 Mobile·Tablet에서는 해제하여 화면 크기에 따른 콘텐츠 노출 방식을 다르게 구현했습니다.

- **배운 점:** JavaScript를 활용한 반응형 플러그인 제어
- **보완점:** `resize` 이벤트를 활용한 안정적인 슬라이더 관리

### 02. 시설 안내 팝업 구현
jQuery와 `window.matchMedia()`를 활용해 화면 크기별 팝업을 구현하고, 여러 팝업이 동시에 열리지 않도록 제어했습니다.

- **배운 점:** 반응형 UI 구현 및 팝업 상태 관리
- **보완점:** 객체와 배열을 활용한 공통 로직으로 코드 간소화


## ⭐ 주요 구현 내용 


#### 01. PC / Mobile 반응형 슬라이더

https://github.com/user-attachments/assets/a38d6772-abb0-4c27-bc29-08c0545e15c9

```text
→ Slick을 활용해 PC 환경에서는 3개의 콘텐츠가 노출되는
  중앙 정렬 슬라이더를 구현하였습니다.
  
  769px 이상에서는 Slick을 적용하고,
  768px 이하에서는 Slick을 해제하여 모바일 환경에서
  콘텐츠가 자연스럽게 노출되도록 반응형으로 처리하였습니다.
```

💡 셀프 코드리뷰
* Slick 활용
* window.innerWidth와 slick-initialized를 활용해 화면 크기에 따른 슬라이더 초기화 및 해제
✅ 화면 크기 변경 시에도 정상적으로 동작하도록 resize 이벤트 활용

<details>
<summary>🔍 main.js (Slick 반응형 슬라이더 로직) 펼치기</summary>

```js
const contents02Slider = $('.contents02_box_outer');

function initContents02Slider() {

  // 769px 이상에서만 Slick 실행
  if (window.innerWidth >= 769) {

    if (!contents02Slider.hasClass('slick-initialized')) {

      contents02Slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        centerMode: true,
        centerPadding: '30px',

        infinite: true,
        speed: 500,

        arrows: true,
        accessibility: false,

        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>'
      });
    }

  } else {

    // 768px 이하에서는 Slick 제거
    if (contents02Slider.hasClass('slick-initialized')) {
      contents02Slider.slick('unslick');
    }
  }
}

initContents02Slider();
```

</details>

#### 02. PC / Mobile 반응형 시설 안내 팝업

https://github.com/user-attachments/assets/3c777d1d-f665-41ac-b1fb-d682834eaea6

```text
→ PC와 Mobile / Tablet 환경의 UI 구조 차이를 고려하여 시설 안내 팝업을 반응형으로 구현하였습니다.
  시설 위치에 따라 화장실과 주차장 팝업을 표시하고,
  PC에서는 필요한 팝업만 노출하며 Mobile / Tablet에서는
  배경 오버레이와 함께 팝업을 표시하도록 구현하였습니다.
```

💡 셀프 코드리뷰
* window.matchMedia()를 활용해 화면 크기에 따른 팝업 동작 구분
 ✅ 반복되는 팝업 열기·닫기 로직을 공통 함수로 정리

<details>
<summary>🔍 main.js (시설 안내 팝업 로직) 펼치기</summary>

```js
const popupBg = $('.popup_bg');
const facilitiesToiletOpen = $('.facilities_toilet_open');
const facilitiesToiletClose = $('.facilities_toilet_close');
const facilitiesToiletPopup = $('.facilities_toilet_popup');

const facilitiesParkingOpen = $('.facilities_parking_open');
const facilitiesParkingClose = $('.facilities_parking_close');
const facilitiesParkingPopup = $('.facilities_parking_popup');


// 화장실 팝업 열기
facilitiesToiletOpen.click(function () {
  if (window.matchMedia('(min-width: 769px)').matches) {
    facilitiesToiletPopup.fadeIn(200);
    facilitiesParkingPopup.hide();
  } else {
    popupBg.fadeIn(200);
    facilitiesToiletPopup.fadeIn(200);
  }
});

// 화장실 팝업 닫기
facilitiesToiletClose.click(function () {
  if (window.matchMedia('(min-width: 769px)').matches) {
    facilitiesToiletPopup.fadeOut(200);
  } else {
    popupBg.fadeOut(200);
    facilitiesToiletPopup.fadeOut(200);
  }
});

// 주차장 팝업 열기
facilitiesParkingOpen.click(function () {

  if (window.matchMedia('(min-width: 769px)').matches) {
    facilitiesToiletPopup.hide();
    facilitiesParkingPopup.fadeIn(200);
  } else {
    popupBg.fadeIn(200);
    facilitiesParkingPopup.fadeIn(200);
  }
});

// 주차장 팝업 닫기
facilitiesParkingClose.click(function () {

  if (window.matchMedia('(min-width: 769px)').matches) {
    facilitiesParkingPopup.fadeOut(200);
  } else {
    facilitiesParkingPopup.fadeOut(200);
    popupBg.fadeOut(200);
  }
});
```

</details>


## 🖥️ 실행 결과


### PC & Tablet

<img src="https://github.com/user-attachments/assets/c177b8cb-3fb5-40ee-8322-2ab29e2b6a62" width="400" height="640"/>
<img src="https://github.com/user-attachments/assets/454ca9c6-203b-4261-9cfc-0edb8974ae3f" width="400" height="550"/>


### Mobile
<img width="300" height="480" alt="image" src="https://github.com/user-attachments/assets/49d269e2-61db-43a2-9034-59ce84ea2061" />
<img width="320" height="400" alt="image" src="https://github.com/user-attachments/assets/d366b1f6-864e-45e2-b972-bf1a82f03958" />


---
### GitHub
https://jeong-yujin-web.github.io/Jeju_Responsive_web/

### 회고
반응형 웹사이트를 구현하며 화면 크기에 따른 레이아웃 변화와 콘텐츠 배치에 대해 고민해볼 수 있었습니다.
특히 Slick과 GSAP을 활용하면서 단순히 라이브러리를 적용하는 것보다 사용자 경험에 맞게 조건을 설정하고
제어하는 과정이 중요하다는 것을 배웠습니다.

앞으로는 접근성과 웹 표준까지 고려하여 다양한 사용자가 편리하게 이용할 수 있는 웹사이트를 구현하고자 합니다.
