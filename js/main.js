document.addEventListener('DOMContentLoaded', function () {

  /**************** header_button ****************/
  const buttons = document.querySelectorAll('.btn button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  /**************** full_menu ****************/
 
    const gnb=document.querySelector('.gnb_outer_pc')
    const fullMenu = document.querySelector('.gnb_menu_full_outer');

    gnb.addEventListener('mouseenter', function () {
      fullMenu.style.display='block';
    });
    gnb.addEventListener('mouseleave', function () {
      fullMenu.style.display='none';
    });
    fullMenu.addEventListener('mouseenter', function () {
      fullMenu.style.display='block';
    });
    fullMenu.addEventListener('mouseleave', function () {
      fullMenu.style.display='none';
    });
 /**************** search_popup ****************/
  const searchPopup = document.querySelector('.search_popup_outer');
  const searchBtns = document.querySelectorAll(
    '.search_box, .search_btn'
  );
  const searchClose = document.querySelector('.search_close');

  searchBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      searchPopup.classList.add('open');
    });
  });

  searchClose.addEventListener('click', function () {
    searchPopup.classList.remove('open');
  });

  /**************** wing_banner ****************/
  const wingBanner = document.querySelector('.wing_outer_mobile');
  const menuBtn = document.querySelector('#menu_btn');
  const closeBtn = document.querySelector('.close');

  menuBtn.addEventListener('click', () => {
    wingBanner.classList.add('open');
    closeBtn.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    wingBanner.classList.remove('open');
    closeBtn.classList.remove('active');
  });


  /**************** wing_banner_btn ****************/

  const wingButtons = document.querySelectorAll('.user_btn button');
  wingButtons.forEach(button => {
    button.addEventListener('click', function () {
   
      wingButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      this.classList.add('active');
    });
  });

  /**************** visual_main ****************/

  const swiperEl = document.querySelector('.mySwiper');

  Object.assign(swiperEl, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    speed: 1000,
    navigation: true,
    pagination: {
      clickable: true
    },
    loop: true
  });

  swiperEl.initialize();

 // 마우스 올리면 정지
  swiperEl.addEventListener('mouseenter', function () {
    swiperEl.swiper.autoplay.stop();
  });

  // 마우스 빼면 재생
  swiperEl.addEventListener('mouseleave', function () {
    swiperEl.swiper.autoplay.start();
  });

  /**************** k-artist ****************/
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

  // 처음 실행
  initContents02Slider();

  /**************** festival ****************/
  const festivals = document.querySelectorAll('.festival');
  const festivalBg = document.querySelector('.contents03_bg');
  // 처음에는 첫 번째 축제 펼치기
  if (festivals.length > 0) {
    festivals[0].classList.add('active');
  }
  
  // 축제 클릭
  festivals.forEach(festival => {
    festival.addEventListener('click', () => {
      
      // 모든 축제 active 제거
      festivals.forEach(item => {
        item.classList.remove('active');
      });
      // 클릭한 축제만 active 추가
      festival.classList.add('active');
    });
  });


  /**************** popup_open / popup_close ****************/
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
      // PC
      facilitiesToiletPopup.fadeIn(200);
      facilitiesParkingPopup.hide();
    } else {
      // Mobile / Tablet
      popupBg.fadeIn(200);
      facilitiesToiletPopup.fadeIn(200);
    }
  });
  // 화장실 팝업 닫기
  facilitiesToiletClose.click(function () {
    if (window.matchMedia('(min-width: 769px)').matches) {
      // PC
      facilitiesToiletPopup.fadeOut(200);
    } else {
      // Mobile / Tablet
      popupBg.fadeOut(200);
      facilitiesToiletPopup.fadeOut(200);
    }
  });
  // 주차장 팝업 열기
  facilitiesParkingOpen.click(function () {

    if (window.matchMedia('(min-width: 769px)').matches) {
      // PC
      facilitiesToiletPopup.hide();
      facilitiesParkingPopup.fadeIn(200);
    } else {
      // Mobile / Tablet
      popupBg.fadeIn(200);
      facilitiesParkingPopup.fadeIn(200);
    }
  });
  // 주차장 팝업 닫기
  facilitiesParkingClose.click(function () {

    if (window.matchMedia('(min-width: 769px)').matches) {
      // PC
      facilitiesParkingPopup.fadeOut(200);
    } else {
      // Mobile / Tablet
      facilitiesParkingPopup.fadeOut(200);
      popupBg.fadeOut(200);
    }
  });

  /****************** heart ****************/
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach(heart => {
    heart.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
  /****************** gsap ****************/
  const btnTop=document.querySelector('.quick_btn');
  window.addEventListener('scroll',()=>{
    if(window.scrollY >= 100){
      gsap.to(btnTop, 1, {
        opacity:1,
      });
    }else{
      gsap.to(btnTop, 1, {
        opacity:0,
      });
    }
  });
  btnTop.addEventListener('click',()=>{
    gsap.to(window, 1,{
      scrollTo:0,
    });
  });
  
  // gnb_full_slider
  let bxSliderInitialized = false;

  gnb.addEventListener('mouseenter', function () {
    fullMenu.style.display = 'block';

    if (!bxSliderInitialized) {
      // 처음 보여질 때 초기화
      $('.gnb_menu_img').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        moveSlides: 1,
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 145,
        slideMargin: 10,
        nextText: '다음 →',
        prevText: '← 이전',
      });
      bxSliderInitialized = true;
    } else {
      // 이미 초기화된 경우, 폭 재계산
      $('.gnb_menu_img').reloadSlider();
    }
  });


/************** k-artist *************/
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const slider = document.querySelector('.contents02_box_outer');
  const box = document.querySelector('.contents02_box');
  const now = document.querySelector('.now');

  let page = 1;

  next.addEventListener('click', () => {
    if (page < 5) {
      page++;
      slider.scrollBy({
        left: box.offsetWidth + 10,
      });
      now.textContent = page;
    }
  });

  prev.addEventListener('click', () => {
    if (page > 1) {
      page--;
      slider.scrollBy({
        left: -(box.offsetWidth + 10),
      });
      now.textContent = page;
    }
  });


});