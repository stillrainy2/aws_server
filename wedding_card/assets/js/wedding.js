var countDownDate = new Date("November 11, 2017 00:00:00").getTime(); 
//1초마다 갱신되도록 함수 생성,실행 

// 오늘 날짜 등록 
var now = new Date().getTime(); 
// 종료일자에서 현재일자를 뺀 시간 
var distance = countDownDate - now; 
// 각 변수에 일, 시, 분, 초를 등록 
var d = Math.floor(distance / (1000 * 60 * 60 * 24)); 
var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
var s = Math.floor((distance % (1000 * 60)) / 1000); 
//id가 d-day인 HTML코드에 내용 삽입 
document.getElementById("d-day").innerHTML = "D - " + d;


 
var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides2(slideIndex += n);
}
/*
function currentSlide(n) {
  showSlides2(slideIndex = n);
}*/

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  //for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndex-1].style.display = "block"; 
  //dots[slideIndex-1].className += " active";
}

//var slideIndex = 0;


function showSlides() {

    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
	if (slideIndex > slides.length) 
	{
		slideIndex = 1
	}

	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 5000); // Change image every 2 seconds
}