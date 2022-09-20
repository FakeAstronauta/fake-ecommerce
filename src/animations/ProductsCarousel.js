export let rotateArr = (imgArr, imgToShow, firstLoad, scaleCenter, direction) => {
    let curr = imgArr.current; 
    let popped = curr.pop();

    popped.style.transition = '';
    popped.style.transform = `translateX(${-popped.offsetWidth}px)`;
    
    if (!!direction) {
        curr.unshift(popped);
    } else {
        curr.push(curr.shift());
    }
    
    setTimeout(() => moveCarousel(imgArr, imgToShow, firstLoad, scaleCenter), 1);
}

let lastElem = null;

export let moveCarousel = (imgArr, imgToShow, firstLoad) => {
    let valDisplace = 0;
    let winWidth = window.innerWidth;
    let spaces = winWidth / imgToShow;
    
    imgArr.current.forEach((e, i) => {
        if(i == 2){
            if(lastElem){
                lastElem.style.transition = 'transform 1.5s';
                lastElem.style.transform = '';
            }

            !firstLoad && (e.children[0].style.transition = 'transform 1.5s');
            e.children[0].style.transform = 'scale(1.2)';
            lastElem = e.children[0];
        }
        
        if (i > 0) {
            valDisplace = i < imgToShow ?
            spaces * i:
            winWidth - 16;
        }
        
        !firstLoad && (e.style.transition = 'transform 1.5s');
        e.style.transform = `translateX(calc(${valDisplace}px - 0.5vw))`;
    })
    
}

export let startCarousel = (imgArr, imgToShow) => {
    setTimeout(() => {
        rotateArr(imgArr, imgToShow, 1);
    }, 1000)
}