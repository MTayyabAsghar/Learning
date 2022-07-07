// var responsiveSlider = function () {

//     var slider = document.getElementById("slider");
//     var sliderWidth = slider.offsetWidth;
//     var slideList = document.getElementById("slideWrap");
//     var count = 1;
//     var items = slideList.querySelectorAll("li").length;
//     var next = document.getElementById("next");

//     window.addEventListener('resize', function () {
//         sliderWidth = slider.offsetWidth;
//     });

//     var prevSlide = function () {
//         if (count > 1) {
//             count = count - 2;
//             slideList.style.left = "-" + count * sliderWidth + "px";
//             count++;
//         }
//         else if (count = 1) {
//             count = items - 1;
//             slideList.style.left = "-" + count * sliderWidth + "px";
//             count++;
//         }
//     };

//     var nextSlide = function () {
//         if (count < items) {
//             slideList.style.left = "-" + count * sliderWidth + "px";
//             count++;
//         }
//         else if (count = items) {
//             slideList.style.left = "0px";
//             count = 1;
//         }
//     };

//     setInterval(function () {
//         nextSlide()
//     }, 5000);

// };

// window.onload = function () {
//     responsiveSlider();
// }

(function renderItem() {
    fetch(`https://source.unsplash.com/620x480/?water`).then((response) => {
        var item = document.getElementById("slideWrap")
        item.innerHTML = `<li><img class="beach-image" src="${response.url}" alt="water"/></li>`
    })
})();