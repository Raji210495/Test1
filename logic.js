container = document.getElementById("main-container");
CustomEase.create("MB", "M0,0,C0.4,0,0.2,1,1,1");
var tl = new TimelineMax({ease:"MB"}); 
 
 
window.addEventListener("load", function () {
	init();
});

function init() {
	container.style.visibility = "visible";
  eventsSetup.call(this);
	show();
 
}


function eventsSetup(){  
	var learnmore = document.getElementById("main-container");
	learnmore.addEventListener("mouseenter", onHoverOver);
	learnmore.addEventListener("mouseleave", onHoverOut);

	var close = document.getElementById("Disclaimerclose");
	var dOpen = document.getElementById("legal");
	dOpen.addEventListener("click", onDisclaimerHover);
	close.addEventListener("click", offDisclaimerHover);

	
  }

function onHoverOver(e) {
	TweenMax.to('#cta', 0.25, { scale: 1.03, rotation: 0.01, force3D: false });
}

function onHoverOut(e) {
	TweenMax.to('#cta', 0.25, { scale: 1, rotation: -0.01, force3D: false });
}

function onDisclaimerHover() {
	 
	TweenMax.to(['#disclaimer_container'], 0, { autoAlpha: 1, force3D: true });
	TweenMax.to('#Disclaimerclose', 0, { autoAlpha: 1, force3D: true });
	TweenMax.to('#legal', 0, { autoAlpha: 0, force3D: true });
	tl.pause();
  }

  function offDisclaimerHover() {
	TweenMax.to(['#disclaimer_container'], 0, { autoAlpha: 0, force3D: true });
	TweenMax.to('#Disclaimerclose', 0, { autoAlpha: 0, force3D: true });
	TweenMax.to('#legal', 0, { autoAlpha: 1, force3D: true });
	tl.play();
  }





TimelineLite.prototype.wait = function(position) {
	return this.set({}, {}, position);
};

// Shows the ad.
function show() {
	tl.addLabel('frame1', '+=0')
	

	.to([left_gradient], 0.5, { autoAlpha: 1,rotation:0.1, force3D: false }, 'frame1+=0')

  .to([F1txt1], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=0.5')
  .to([F1txt1], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=2.5')
  .to([img_01], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=3')

  .to([img_02], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=3')
  .to([F2txt1], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=3.5')
  .to([F2txt1], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=5.5')
  .to([img_02,left_gradient], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=6')

  .to([img_03], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=6')
  .to([img_03], 0.5, { autoAlpha: 1, filter: "blur(4px)", force3D: true }, 'frame1+=7.5')
  .to([F3txt1], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=8')
//   .to([F3txt1], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=8.5')
//   .to([img_03], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=9')

//   .to([img_04], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=9')
// 		.to([img_04], 0.5, { autoAlpha: 1, filter: "blur(4px)", force3D: true }, 'frame1+=10.5')
//   .to([F4txt1], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=11')
  .to([cta], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=8.5')


}

// Exit Hnadlers

 
 
