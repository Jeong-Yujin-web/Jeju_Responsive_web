document.addEventListener('DOMContentLoaded', function () {
  
  /************ bread_crumbs ************/
  const breadBtn = document.querySelector(".bread_crumb_btn");
  const breadBox = document.querySelector(".bread_crumb_box");
  
  breadBtn.addEventListener('click',()=>{
    breadBox.classList.toggle("open");
    breadBtn.classList.toggle("active");
  });
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

/**************** option_btn ****************/
  const optionBtns=document.querySelectorAll('.option_box button');
  optionBtns.forEach(optionBtn=>{
      optionBtn.addEventListener('click', function(){
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
  
});