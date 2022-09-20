export let toggleAnim = (classAnim, refElem) => {
    let cList = refElem.current.classList;
    if (cList[[...cList].length - 1] !== classAnim) {
        cList.toggle(classAnim);
    }
}

/* add toggle fade effect and remove element */

export let showElem = (...refElem) => {
    refElem.forEach((e) => {
        if (e.current) {
            let cList = e.current.classList;
            cList.remove('remove');
            cList.add('fade-in')
        }
    });
}

export let hideElem = (...refElem) => {
    refElem.forEach((e) => {
        if (e.current) {
            let cList = e.current.classList;
            cList.add('remove');
            cList.remove('fade-in');
        }
    });
}

export let linkUl = (headerRef, refElem, lastElem, num) => {
    lettersB(headerRef);

    let r = refElem.current[num];
    let l = lastElem.current;

    let rList = r.classList;
    let lList = l && l.classList;

    if (r !== l) {
        rList.add('highlited');
        rList.remove('hided');

        if (!!l) {
            lList.add('hided');
            lList.remove('highlited');
        }
    }

    lastElem.current = r;
}

/* is unevitable to be called due to mouse always is over navbar */

export let clearUl = (refElem, lastElem) => {
    if (lastElem.current && refElem.current) {
        let lList = lastElem.current.classList;
        let rList = refElem.current.classList;

        rList.remove('blink');
        rList.add('remove');

        lastElem.current = null;

        lList.add('hided');
        lList.remove('highlited');
    }
}

export let toggleUl = (refElem) => {
    let cList = refElem.current.classList;

    if (cList[[...cList].length - 1] === 'hided') {
        cList.remove('hided');
        cList.add('highlited');
    } else if (cList[[...cList].length - 1] === 'highlited') {
        cList.add('hided');
        cList.remove('highlited');
    }
}

/* drop down menu animations */

export let lettersW = (refElem) => {
    if (window.pageYOffset == 0) {
        let cList = refElem.current.classList;
        if (cList[[...cList].length - 1] === 'b-color') {
            cList.add('w-color');
            cList.remove('b-color');
        }
    }

}

export let lettersB = (refElem) => {
        let cList = refElem.current.classList;
        if (cList[[...cList].length - 1] === 'w-color') {
            cList.add('b-color');
            cList.remove('w-color');
        }
}

export let prevScroll = (prevScroll) => {
    return prevScroll;
}

export let hideHeader = (refElem, bgRef) => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            refElem.current.style.top = "0";
        } else {
            refElem.current.style.top = "-500px";
        }

        /* disapear element with scroll */
        if (currentScrollPos == 0) {
            bgRef.current.style.opacity = "0"
            refElem.current.classList.add('w-color');
            refElem.current.classList.remove('b-color');

        } else {
            bgRef.current.style.opacity = "1"
            refElem.current.classList.add('b-color');
            refElem.current.classList.remove('w-color');
        }

        prevScrollpos = currentScrollPos;
    }
}

/* Side menu animations */

export let displace = (refElem, refLink, headerRef) => {
    refElem.current.classList.add('displaced');
    refLink.current.classList.remove('hide-side');
    headerRef.current.classList.remove('none');
}

export let bring = (refElem, refLink, headerRef) => {
    refElem.current.classList.remove('displaced');
    refLink.current.classList.add('hide-side');
    headerRef.current.classList.add('none');
}

export let showSideMenu = (refElem) => {
    document.body.style.overflow = 'hidden';
    refElem.current.classList.remove('displaced');
}

export let hideSideMenu = (sideMenuRef, linksRef, displaceRef, headerRef) => {
    document.body.style.overflow = 'auto';
    sideMenuRef.current.classList.add('displaced');
    bring(displaceRef, linksRef, headerRef);
    // linksRef.current.style.display = 'none';
}