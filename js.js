document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded')
  const boxList = ['TL', 'T', 'TR', 'L', 'R', 'BL', 'B', 'BR' ]
  const boxes = document.querySelectorAll('.box');
  for (let i = 0; i < 8; ++i) {
    boxes[i].onclick = (event) => {
      event.target.className = `recenter ${boxList[i]}`;
      const exp = document.querySelector(`.expander-${boxList[i]}`);
      // console.log('exp', exp)
      exp.className = 'blowUp';
      exp.firstElementChild.children[1].onclick = (event) => {
        // console.log('closeEvent', event);
        // set the class name of the parent of our X element to the correct expander
        event.target.parentNode.parentNode.className = `expander-${boxList[i]}`;
        // console.log(event.target.parentNode);
        moveSliders();
      }
    }
  }
});

function moveSliders() {
  // spiral order
  const l = document.querySelector('.L');
  // if (l) setTimeout(() => {l.classList = 'box slide-L sway4'}, 0);
  if (l) l.classList = 'box slide-L';
  const tl = document.querySelector('.TL');
  // if (tl) setTimeout(() => {tl.classList = 'box slide-TL'}, 100);
  if (tl) tl.classList = 'box slide-TL';
  const t = document.querySelector('.T');
  // if (t) setTimeout(() => {t.classList = 'box slide-T'}, 200);
  if (t) t.classList = 'box slide-T';
  const tr = document.querySelector('.TR');
  // if (tr) setTimeout(() => {tr.classList = 'box slide-TR'}, 300);
  if (tr) tr.classList = 'box slide-TR';
  const r = document.querySelector('.R');
  // // if (r) setTimeout(() => {r.classList = 'box slide-R'}, 400);
  if (r) r.classList = 'box slide-R';
  const br = document.querySelector('.BR');
  // if (br) setTimeout(() => {br.classList = 'box slide-BR'}, 500);
  if (br) br.classList = 'box slide-BR';
  const b = document.querySelector('.B');
  // if (b) setTimeout(() => {b.classList = 'box slide-B'}, 600);
  if (b) b.classList = 'box slide-B'
  const bl = document.querySelector('.BL');
  // if (bl) setTimeout(() => {bl.classList = 'box slide-BL'}, 700);
  if (bl) bl.classList = 'box slide-BL';
}
