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




