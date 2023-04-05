const element = document.querySelector('.lineUp');
const observer = new IntersectionObserver(entries => {
  console.log(entries)
  //element.classList.toggle( 'lineUp', entries[0].isIntersecting );
  if(entries[0].isIntersecting){
    element.style.animationPlayState="running";
  } else{
    element.style.animationPlayState="paused";
  }
});

observer.observe( element );