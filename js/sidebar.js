const nav = 
    document.querySelector('.#nav');

const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;

    if (scrollPosition < 100) {
        if (
            !nav.classlList.contains('"scrolled-down')
        ){
            nav.classList.add('scrolled-down');
        }
    } else {
        if (nav.classList.contains('scrolled-down')
        ){
            nav.classList.remove('scrolled-down');
        }
    }
};

document.addEventListener('scroll', onScroll);