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

### ⭐ 주요 구현 내용 

#### 01. PC / Mobile 반응형 슬라이더
https://github.com/user-attachments/assets/a38d6772-abb0-4c27-bc29-08c0545e15c9


```text
→ Slick을 활용해 PC 환경에서는 3개의 콘텐츠가 노출되는
  중앙 정렬 슬라이더를 구현하였습니다.
  
  769px 이상에서는 Slick을 적용하고,
  768px 이하에서는 Slick을 해제하여 모바일 환경에서
  콘텐츠가 자연스럽게 노출되도록 반응형으로 처리하였습니다.
```
#### 02. PC / Mobile 반응형 시설 안내 팝업

https://github.com/user-attachments/assets/3c777d1d-f665-41ac-b1fb-d682834eaea6
```text
→ PC와 Mobile / Tablet 환경의 UI 구조 차이를 고려하여 시설 안내 팝업을 반응형으로 구현하였습니다.
  PC에서는 고정된 위치에 탭으로 개별 팝업을 노출하고,
  Mobile / Tablet에서는 배경 오버레이와 함께 팝업을 표시하여 사용자에게 명확한 정보 영역을 제공하였습니다.
```

## 🖥️ 실행 결과

### PC
<img width="430" height="850" alt="image" src="https://github.com/user-attachments/assets/c177b8cb-3fb5-40ee-8322-2ab29e2b6a62" />


### Tablet
<img width="480" height="640" alt="image" src="https://github.com/user-attachments/assets/454ca9c6-203b-4261-9cfc-0edb8974ae3f" />


### Mobile
<img width="300" height="480" alt="image" src="https://github.com/user-attachments/assets/49d269e2-61db-43a2-9034-59ce84ea2061" />
<img width="320" height="400" alt="image" src="https://github.com/user-attachments/assets/d366b1f6-864e-45e2-b972-bf1a82f03958" />



### GitHub
https://jeong-yujin-web.github.io/Jeju_Responsive_web/
### 회고
```text
→ 반응형 웹사이트를 구현하며 화면 크기에 따른 레이아웃 변화와 콘텐츠 배치에 대해 고민해볼 수 있었습니다.
  특히 Slick과 GSAP을 활용하면서 단순히 라이브러리를 적용하는 것보다 사용자 경험에 맞게 조건을 설정하고
  제어하는 과정이 중요하다는 것을 배웠습니다.

  앞으로는 접근성과 웹 표준까지 고려하여 다양한 사용자가 편리하게 이용할 수 있는 웹사이트를 구현하고자 합니다.
```
