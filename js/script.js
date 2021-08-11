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

function scrollEvt(){
    const scroll_top = window.scrollY;

    if(scroll_top > seasonOffset - (b_Height / 2 + 500)){
        seasonLeft.classList.add("active");
        seasonRight.classList.add("active");
    }else{
        seasonLeft.classList.remove("active");
        seasonRight.classList.remove("active");
    }

}

// body에 onscroll 설정을 안 해놔서 계속 작동이 안됐음..ㅠ 드디어 해결!


