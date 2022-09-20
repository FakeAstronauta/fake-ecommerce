export let rotateArr = (imgArr, imgToShow, firstLoad, direction = 1) => {
    let curr = imgArr.current; 
    let popped = curr.pop();

    popped.style.transition = '';
    popped.style.transform = `translateX(${-100}%)`;
    
    if (!!direction) {
        curr.unshift(popped);
    } else {
        curr.push(curr.shift());
    }
    
    setTimeout(() => moveCarousel(imgArr, imgToShow, firstLoad), 1);
}

export let moveCarousel = (imgArr, imgToShow, firstLoad) => {
    let valDisplace = 0;
    let winWidth = window.innerWidth;
    let spaces = winWidth / imgToShow;

    imgArr.current.forEach((e, i) => {
        if (i > 0) {
            valDisplace = i < imgToShow ?
            spaces * i :
            100;
        }
        
        !firstLoad && (e.style.transition = 'transform 1s linear');
        e.style.transform = `translateX(${valDisplace}%)`;
    })

    startCarousel(imgArr, imgToShow, false);
}

/* BUG: when delay is the same as animation speed */

export let startCarousel = (imgArr, imgToShow, firstLoad) => {
    setTimeout(() => {
        rotateArr(imgArr, imgToShow, firstLoad);
    }, 5000)
}