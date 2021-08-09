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


// 프로모션 감추고 보여주기
const promo_tog = document.querySelector("#notice .right img");

promo_tog.addEventListener("click", function(){
    let active = promo_tog.classList.contains("active");
    const promoPart = document.querySelector("#notice .promotion");

    if(active){
        promo_tog.classList.remove("active");
        promoPart.classList.remove("active");
    }else{
        promo_tog.classList.add("active");
        promoPart.classList.add("active");
    }
});




