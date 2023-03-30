
if(document.getElementsByClassName("header-animation").length){
    gsap.from( '.header-animation',{duration: 1, y: '-100%', ease:'bounce'})
  // gsap.from( '.hero-animation',{duration: 1.5, x:'-100%', ease:'power4.out'})
  
}
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.productsec-animation',{ scrollTrigger:'.productsec-animation',duration: 1, x : '-100%'})

var check_class=false;
var _intv = setInterval(function(){
  if($('.drawer').hasClass('active') && check_class==false){
    check_class=true;
    gsap.from( '.recommended-productsboxes',{duration: .5,opacity:0, delay:.5,stagger:.5})
    
     gsap.from( '.drawer__cart-items-wrapper',{duration: 1.5, x:'-100%', ease:'power4.out'}); 
      gsap.fromTo('.cartbtn-animation',{ opacity:0, scale:0, },{duration:1, delay:1.5, opacity:1, scale:1})
  }
  else if(!$('.drawer').hasClass('active')  && check_class==true){
    check_class=false;
  }
},1000);

    gsap.from( '.recommended-productsboxes',{duration: .5,opacity:0, delay:.5,stagger:.5})

  gsap.from('.card',{ duration: 1, x : '-100%'})
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.animation-blog',{ scrollTrigger:'.blog-animate',duration: 4, x : '-100%', stagger:1, repeat:-1, yoyo:true})


gsap.registerPlugin(ScrollTrigger);
 gsap.from( '.new-animation .card',{duration: 1, y: '-100%', ease:'bounce'})