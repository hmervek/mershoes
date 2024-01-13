$(document).ready(function(){
    $('.slick-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      dots: false,
      infinite: true,
      centermode: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots:true,
            arrows:false,
          }
        },

      ]
    });
  });

document.getElementById('login').addEventListener('click', function() {
  document.getElementById('loginPopup').style.display = 'block';
});


document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('loginPopup').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('loginPopup')) {
      document.getElementById('loginPopup').style.display = 'none';
  }
});
function showSelectedneed() {
  var selectedValue = document.getElementById("needselect").value;

  var productCards = document.querySelectorAll(".need_product .product-card");
  for (var i = 0; i < productCards.length; i++) {
      productCards[i].style.display = "none";
  }

  var selectedProduct = document.getElementById(selectedValue);
  if (selectedProduct) {
      selectedProduct.style.display = "block";
  }
}
  document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('open');
});
var sizeBoxes = document.querySelectorAll('.size_box');

sizeBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        sizeBoxes.forEach(function(otherBox) {
            otherBox.classList.remove('this');
        });
        box.classList.add('this');
    });
});
function toggleAnswer(questionId) {
  var answer = document.getElementById(questionId);

  if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
  } else {
      answer.style.display = 'none';
  }
}