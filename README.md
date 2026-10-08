# Jeju_Responsive_web
```text
비짓제주 웹사이트를 반응형으로 리뉴얼하였습니다.

> 비짓제주 웹사이트의 정보 구조와 UI/UX를 분석하고 개선
> 사용자에게 필요한 정보를 직관적으로 제공하여 사용성과 접근성 향상
```

## 📋 기획안
```text
프로젝트의 기획 배경과 요구사항은 아래 문서에서 확인할 수 있습니다.

👉 [기획안 PDF 보기](./docs/기획안.pdf)
```

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

<details>
```
<summary>
  
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

</summary>
```
<details>
#### 💡 셀프 코드리뷰 & 배운 점

* **Slick을 활용한 반응형 슬라이더 구현**: PC 환경에서는 Slick을 활용해 여러 콘텐츠가 한 번에 보이는 슬라이더를 구현하고, 모바일 환경에서는 Slick을 해제하여 콘텐츠가 자연스럽게 노출되도록 처리했습니다. 화면 크기에 따라 플러그인의 동작을 다르게 적용하면서 반응형 환경에서 기능을 제어하는 방법을 익혔습니다.

* **화면 크기에 따른 플러그인 제어**: `769px`을 기준으로 Slick의 초기화와 해제를 구분했습니다. 단순히 CSS로 레이아웃만 변경하는 것이 아니라 JavaScript를 통해 플러그인의 동작 자체를 제어하면서 반응형 기능을 구현하는 방법을 배울 수 있었습니다.

* **앞으로의 보완점**: 현재는 `769px`을 기준으로 Slick을 적용하거나 해제하고 있습니다. 앞으로는 화면 크기가 변경되는 상황에서도 슬라이더가 안정적으로 동작하도록 `resize` 이벤트를 활용하여 초기화와 해제 과정을 관리하는 방식으로 개선해 보고 싶습니다.


#### 02. PC / Mobile 반응형 시설 안내 팝업

https://github.com/user-attachments/assets/3c777d1d-f665-41ac-b1fb-d682834eaea6
```text
→ PC와 Mobile / Tablet 환경의 UI 구조 차이를 고려하여 시설 안내 팝업을 반응형으로 구현하였습니다.
  시설 위치에 따라 화장실과 주차장 팝업을 표시하고,
  PC에서는 필요한 팝업만 노출하며 Mobile / Tablet에서는
  배경 오버레이와 함께 팝업을 표시하도록 구현하였습니다.
```

```

<details>
```
<summary>
  
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
</summary>
```
<details>

#### 💡 셀프 코드리뷰 & 배운 점

* **jQuery를 활용한 시설 안내 팝업 구현**: 시설 위치에 따라 화장실과 주차장 정보를 확인할 수 있도록 팝업 기능을 구현했습니다. jQuery의 `fadeIn()`과 `fadeOut()`을 활용하여 팝업이 자연스럽게 나타나고 사라지도록 처리하면서 DOM 요소의 상태를 제어하는 방법을 익혔습니다.

* **PC / Mobile·Tablet 환경에 따른 팝업 제어**: `window.matchMedia()`를 활용하여 `769px`을 기준으로 PC와 Mobile·Tablet의 팝업 동작을 다르게 처리했습니다. PC에서는 필요한 팝업만 표시하고, Mobile·Tablet에서는 배경 오버레이와 함께 팝업을 표시하여 화면 크기에 따라 다른 UI를 제공하도록 구현했습니다.

* **팝업 간 상태 제어**: 화장실 팝업과 주차장 팝업이 동시에 표시되지 않도록 다른 팝업을 닫은 후 선택한 팝업을 표시하도록 처리했습니다. 여러 UI 요소의 상태가 서로 영향을 주는 상황에서 각각의 상태를 함께 관리하는 방법을 배울 수 있었습니다.

* **앞으로의 보완점**: 현재는 화장실과 주차장 팝업을 각각 변수와 이벤트로 나누어 관리하고 있습니다. 시설 종류가 추가될 경우 코드가 길어질 수 있기 때문에, 앞으로는 시설 정보를 객체나 배열로 관리하여 공통 로직으로 처리할 수 있도록 개선해 보고 싶습니다.

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
