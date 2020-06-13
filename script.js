gsap.registerPlugin(MotionPathPlugin);



let tl = gsap.timeline({});
let duraWall = 0.8;
let shadowUnder = document.querySelectorAll('#shadow1, #shadow2');
let bubbles = document.querySelectorAll('#b-b, #b-m, #b-s');
let waves = document.querySelectorAll('#wave1, #wave2');

gsap.to("#bubbles-1",{
  transform: "matrix(1,0,0,1,104.046,-50.6434)",
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  duration: 3.5
});

gsap.to("#bubbles-2",{
  transform: "matrix(1,0,0,1,171.382,-43.2825)",
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  duration: 2.5
});

gsap.to("#bubbles-3",{
  transform: "matrix(1,0,0,1,116.401,-40.9671)",
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
  duration: 2.3
});

gsap.to("#bubbles-4",{
  transform: "matrix(1,0,0,1,142.828,-56.1642)",
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
  duration: 3.2
});




gsap.fromTo("#duck",
            {
  transformOrigin: "center bottom",
  rotation: -15,
  
  },
            {
  transformOrigin: "center bottom",
  rotation: 10,
  repeat: -1,
  yoyo: true,
   ease: "power1.inOut",
  duration: 2
});






tl.from("#wall-right",{
  scale: 0,
  transformOrigin: "50% 50%",
  duration: duraWall,
  ease: "back.out(2)"});

tl.from("#wall-left",{
  scale: 0,
  transformOrigin: "50% 50%",
  duration: duraWall,
  ease: "back.out(2)"}, "-=0.5");

tl.from("#floor",{
  scale: 0,
  transformOrigin: "50% 50%",
  duration: duraWall,
  ease: "back.out(2)"},"-=0.5");

tl.from("#wash",{
  scale: 0,
  transformOrigin: "50% 50%",
  duration: 1,
  ease: "back.out(1)"},"main");

tl.from("#tana",{
  scale: 0,
  transformOrigin: "50% 50%",
  duration: 1,
  ease: "back.out(1)"},"<");

tl.from("#mirror",{
  
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1)"},"<");

tl.from("#hana",{
  scale: 0,
  transformOrigin: "50% bottom",
  duration: 0.7,
  ease: "power3. out"},"<0.3");



tl.from(shadowUnder,{
  opacity: 0,
  duration: 0.5,

  ease: "power3. out"},"shadow");

tl.from("#tub",{
  scale: 0,
  transformOrigin: "50% bottom",
  duration: 0.7,
  ease: "back.out(1)"},"main");

tl.from("#duck",{
  
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1)"},"<0.8");

tl.from("#tub-shadow",{
  opacity: 0,
  duration: 0.5,

  ease: "power3. out"},"shadow");

tl.from("#mat",{
  scale: 0,
  transformOrigin: "50% 50%",

  ease: "power3. out"},"shadow");

tl.from("#bubbles-1",{
  opacity: 0,
  duration: 0.5,

  ease: "power3. out"},"<0.3");

tl.from("#bubbles-2",{
  opacity: 0,
  duration: 0.5,

  ease: "power3. out"},"<0.3");

tl.from("#bubbles-3",{
  opacity: 0,
  duration: 0.5,

  ease: "power3. out"},"<0.3");

tl.from("#bubbles-4",{
  opacity: 0,
  duration: 0.5,

  ease: "power3. out"},"<0.3");

tl.from(waves,{
  
  opacity: 0,
  },"<");

tl.fromTo(waves,{
  transformOrigin: "50% 50%",
  scale: 0,
  opacity:1,},
  
            {
  transformOrigin: "50% 50%",
  scale: 1.7,
  duration: 4,
  opacity:0.1,
  repeat:-1,
  stagger: {
		amount: 2,
		each: 1,
		repeat: -1
	}
},"<-1");

tl.fromTo(bubbles,{
  opacity: 0},
  {
  duration: 0.5,
  opacity: 1,
  ease: "power3.out"},"<1.1");

tl.to("#b-s", {
  duration: 6, 
  ease: "power2.in",
  immediateRender: true,
  repeat: -1,
  motionPath: {
    path: "#pathM",
    align: "#pathM",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
    start: 0.5,
    end: 1
  }
  
},"<-1");

tl.to("#b-b", {
  duration: 7, 
  ease: "power3.in",
  immediateRender: true,
  repeat: -1,
  motionPath: {
    path: "#pathB",
    align: "#pathB",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
    start: 0.5,
    end: 1
  }
  
}, "<-0.5");

tl.to("#b-m", {
  duration: 8, 
  ease: "power1.in",
  immediateRender: true,
  repeat: -1,
  motionPath: {
    path: "#pathS",
    align: "#pathS",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
    start: 0.5,
    end: 1
  }
  
},"<-1.5");



// MotionPathHelper.create("#b-b");