let finished = true;

export let rotateArr = (imgArr, imgToShow, direction = 1) => {
    let curr = imgArr.current;
    let popped = curr.pop();

    popped.style.transition = '';
    popped.style.transform = `translateX(${-100}%)`;

    if (!!direction) {
        curr.unshift(popped);
    } else {
        curr.push(curr.shift());
    }
}

// rotate images and removes the animation at the end
export let moveCarousel = (imgArr, imgToShow, firstLoad) => {
    if (finished) {
        finished = false;
        imgArr.current.forEach((e, i) => {
            let valDisplace = i < imgToShow ?
                100 * i :
                imgToShow * 100;

            /* if(i == 2){
                if(lastElem){
                    lastElem.style.transition = 'transform 1.5s';
                    lastElem.style.transform = '';
                }
     
                !firstLoad && (e.children[0].style.transition = 'transform 1.5s');
                e.children[0].style.transform = 'scale(1.2)';
                lastElem = e.children[0];
            } */
                
            !firstLoad && (e.style.transition = 'transform 1.5s');
            e.style.transform = `translateX(${valDisplace}%)`;
        })

        rotateArr(imgArr, imgToShow);
        setTimeout(() => { removeAnimation(imgArr) }, 1501);
    }
}

export let removeAnimation = (imgArr) => {
    finished = true;
    imgArr.current.forEach((e, i) => {
        e.style.transition = '';
    })
}
