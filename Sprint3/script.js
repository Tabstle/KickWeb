let observer = new IntersectionObserver(myObserverCallback, { threshold: [1] });


const quote = document.querySelectorAll(".quote");  

quote.forEach((el) => {
    observer.observe(el);
});

function myObserverCallback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0.1;
        }
    })
}


console.log(grid)