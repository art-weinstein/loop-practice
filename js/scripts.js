// $(document).ready(function(){
//   $("#favoriteList").click(function(){
// const favIceCream = ["Chocolate", "Vanilla", "Peppermint", "Cotton candy"];
// console.log(favIceCream);
// favIceCream.forEach(function(thing) {
//   alert(" " + thing + ",");
// })
// });
// });

// $("form#langSelect").submit(function(event) {
//   event.preventDefault();

//   $ (window).addEventListener(load(event) {
//     event.preventDefault();

//   $  window.addEventListener('load', (event) => {
//       console.log('page is fully loaded');
//     });

$(document).ready(function(){
const favIceCream = ["Chocolate", "Vanilla", "Peppermint", "Cotton candy"];
console.log(favIceCream);
favIceCream.forEach(function(thing) {
  $("#favorite").append(" " + thing + ",");
})
});
