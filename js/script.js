// visual 파트 fade in

const fadeIn = document.querySelectorAll("#visual .fade_in");

fadeIn.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1
    })
});

// notice slide top

new Swiper("#notice .top .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true
});

new Swiper("#notice .promotion .swiper-container", {
    autoplay: {
        delay: 5000
    },
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true
    },
    navigation: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next"
    }
    
});

new Swiper("#awards .wrap .swiper-container", {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: "#awards .swiper-prev",
        nextEl: "#awards .swiper-next",
    }

})


// 프로모션 감추고 보여주기
const promo_tog = document.querySelector("#notice .right img");
//버튼

promo_tog.addEventListener("click", function(){
    let active = promo_tog.classList.contains("active");
    const promoPart = document.querySelector("#notice .promotion");
    //프로모션 슬라이드 파트

    if(active){
        promo_tog.classList.remove("active");
        promoPart.classList.remove("active");
    }else{
        promo_tog.classList.add("active");
        promoPart.classList.add("active");
    }
});

const seasonLeft = document.querySelector("#season .left");
const seasonRight = document.querySelector("#season .right");
const seasonOffset = document.querySelector("#season").offsetTop;   //2464
const b_Height = window.innerHeight;
console.log(seasonOffset)

const reserveLeft = document.querySelector("#reserve .left");
const reserveText = document.querySelector("#reserve .text");
const reserveRight = document.querySelector("#reserve .right");
const reserveOffset = document.querySelector("#reserve").offsetTop; //2864

const pickTop = document.querySelector("#pick_fav .top");
const pickMid = document.querySelector("#pick_fav .mid");
const pickBtn = document.querySelector("#pick_fav a");
const pickOffset = document.querySelector("#pick_fav").offsetTop;

const findLeft = document.querySelector("#find_store .left");
const findRight = document.querySelector("#find_store .right");
const findOffset = document.querySelector("#find_store").offsetTop;


function scrollEvt(){
    const scroll_top = window.scrollY;

    if(scroll_top > seasonOffset - (b_Height / 2 + 500)){
        seasonLeft.classList.add("active");
        seasonRight.classList.add("active");
    }else{
        seasonLeft.classList.remove("active");
        seasonRight.classList.remove("active");
    }

    if(scroll_top > reserveOffset - (b_Height / 2 + 500)){
        reserveLeft.classList.add("active");
        reserveText.classList.add("active");
        reserveRight.classList.add("active");
    }else{
        reserveLeft.classList.remove("active");
        reserveText.classList.remove("active");
        reserveRight.classList.remove("active");
    }

    if(scroll_top > pickOffset - (b_Height / 2 + 500)){
        pickTop.classList.add("active");
        pickMid.classList.add("active");
        pickBtn.classList.add("active");
    }else{
        pickTop.classList.remove("active");
        pickMid.classList.remove("active");
        pickBtn.classList.remove("active");
    }

    if(scroll_top > findOffset - (b_Height / 2 + 550)){
        findLeft.classList.add("active");
        findRight.classList.add("active");
    }else{
        findLeft.classList.remove("active");
        findRight.classList.remove("active");
    }
}

// body에 onscroll 설정을 안 해놔서 계속 작동이 안됐음..ㅠ 드디어 해결!




