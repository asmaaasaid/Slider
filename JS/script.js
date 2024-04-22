var imgs=Array.from(document.querySelectorAll('.container img'))  //node list
var innerImg = document.querySelector('.parent img')
console.log(imgs)

//another solution for display
// var imgContainer = document.getElementById('img-container')
// imgContainer.addEventListener('click',function(){
//     alert('hi')
// })

//display
var indexOfClick=0;
var fixedLayer=document.getElementById('fixed-layer')
for(var i=0; i<imgs.length; i++){
  imgs[i].addEventListener('click',function(e){
    console.log(e.target)
    var imgClicked = e.target;
        indexOfClick = imgs.indexOf(imgClicked)
    console.log(indexOfClick);
    var imgSrc = imgClicked.getAttribute('src')
     innerImg.setAttribute('src',imgSrc)
    fixedLayer.style.display='flex'
    
})  
}
//close
var closeBtn = document.getElementById('close-btn')
closeBtn.addEventListener('click',function(){
        fixedLayer.style.display='none'
})

fixedLayer.addEventListener('click',function(){
  fixedLayer.style.display='none'
})

//arrow-right
var rightBtn = document.getElementById('right-btn')
rightBtn.addEventListener('click',function(e){
  e.stopPropagation()
  getNext()
})
function getNext(){
  indexOfClick++;
  console.log(indexOfClick);
  if(indexOfClick==imgs.length){
    indexOfClick=0;
  }
  var nextImg = imgs[indexOfClick]
  console.log(nextImg);
  var nextImgSrc = nextImg.getAttribute('src')
  innerImg.setAttribute('src',nextImgSrc)
}

//arrow-left
var lefttBtn = document.getElementById('left-btn')
lefttBtn.addEventListener('click',function(e){
  e.stopPropagation()
  getPrev();
})
function getPrev(){
  indexOfClick--;
  console.log(indexOfClick);
if(indexOfClick<0){
  indexOfClick=imgs.length-1;
}
var prevImg = imgs[indexOfClick]
console.log(prevImg);
var prevImgSrc = prevImg.getAttribute('src')
innerImg.setAttribute('src',prevImgSrc)
}
document.addEventListener('keyup',function(e){
  if(e.key == 'ArrowRight'){
    getNext()
  }
  else if(e.key == 'ArrowLeft'){
    getPrev()
  }
  else if(e.key = 'Escape'){
    fixedLayer.style.display='none'
  }
})