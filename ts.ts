function setBoxFunctions() {
    console.log('loaded')
    const boxList = ['TL', 'T', 'TR', 'L', 'R', 'BL', 'B', 'BR' ]
    const boxes : NodeListOf<HTMLElement> = document.querySelectorAll('.box');
    for (let i = 0; i < 8; ++i) {
        boxes[i].onclick = (event) => {
            const target = event.target as HTMLElement;
            target.classList.add(`recenter`, `${boxList[i]}`);
            target.classList.remove(`slide-${boxList[i]}`);
            const exp = document.querySelector(`.expander-${boxList[i]}`);
            // console.log('exp', exp)
            // list of sections that need a vertical scroll bar
            exp?.classList.remove(`.expander-${boxList[i]}`);
            if (['T'].includes(boxList[i])) {
                exp?.classList.add('blowUp', 'yScroll');
            } else {
                exp?.classList.add('blowUp');
            }
            // set the close button of each expander box to reset the view with animation
            const originator = exp?.firstElementChild?.children[1] as HTMLElement;
            originator.onclick = () => {
                // console.log('closeEvent', event);
                // set the class name of the parent of our X element to the correct expander
                console.log('closing');
                exp?.classList.add(`expander-${boxList[i]}`);
                exp?.classList.remove('blowUp', 'yScroll');
                // console.log(event.target.parentNode);
                moveSliders();
            }
            // setTimeout(() => exp.classList.add('hmin'), 2000);
        }
    }
};

function moveSliders() {
    // spiral order
    const l = document.querySelector('.L');
    // if (l) setTimeout(() => {l.classList = 'box slide-L sway4'}, 0);
    if (l) {
        l.classList.remove('L', 'hidden', 'recenter');
        l.classList.add('slide-L');
    }
    const tl = document.querySelector('.TL');
    // if (tl) setTimeout(() => {tl.classList = 'box slide-TL'}, 100);
    if (tl) {
        tl.classList.remove('TL', 'hidden', 'recenter');
        tl.classList.add('slide-TL');
    }
    const t = document.querySelector('.T');
    // if (t) setTimeout(() => {t.classList = 'box slide-T'}, 200);
    if (t) {
        t.classList.remove('T', 'hidden', 'recenter');
        t.classList.add('slide-T');
    }
    const tr = document.querySelector('.TR');
    // if (tr) setTimeout(() => {tr.classList = 'box slide-TR'}, 300);
    if (tr) {
        tr.classList.remove('TR', 'hidden', 'recenter');
        tr.classList.add('slide-TR');
    }
    const r = document.querySelector('.R');
    // // if (r) setTimeout(() => {r.classList = 'box slide-R'}, 400);
    if (r) {
        r.classList.remove('R', 'hidden', 'recenter');
        r.classList.add('slide-R');
    }
    const br = document.querySelector('.BR');
    // if (br) setTimeout(() => {br.classList = 'box slide-BR'}, 500);
    if (br) {
        br.classList.remove('BR', 'hidden', 'recenter');
        br.classList.add('slide-BR');
    }
    const b = document.querySelector('.B');
    // if (b) setTimeout(() => {b.classList = 'box slide-B'}, 600);
    if (b) {
        b.classList.remove('B', 'hidden', 'recenter');
        b.classList.add('slide-B');
    }
    const bl = document.querySelector('.BL');
    // if (bl) setTimeout(() => {bl.classList = 'box slide-BL'}, 700);
    if (bl) {
        bl.classList.remove('BL', 'hidden', 'recenter');
        bl.classList.add('slide-BL');
    }
}

export{ moveSliders, setBoxFunctions }
