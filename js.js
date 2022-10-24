document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded')
  const boxList = ['TL', 'T', 'TR', 'L', 'R', 'BL', 'B', 'BR' ]
  const boxes = document.querySelectorAll('.box');
  for (let i = 0; i < 8; ++i) {
    boxes[i].onclick = (event) => {
      event.target.className = `recenter ${boxList[i]}`;
      const exp = document.querySelector(`.expander-${boxList[i]}`);
      console.log(exp)
      exp.className = (`blowUp`);
    }
  }
});

function moveSliders() {
  // spiral order
  const l = document.querySelector('.L');
  if (l) setTimeout(() => {l.classList = 'box slide-L sway4'}, 0);
  const tl = document.querySelector('.TL');
  if (tl) setTimeout(() => {tl.classList = 'box slide-TL sway1'}, 90);
  const t = document.querySelector('.T');
  if (t) setTimeout(() => {t.classList = 'box slide-T sway2'}, 180);
  const tr = document.querySelector('.TR');
  if (tr) setTimeout(() => {tr.classList = 'box slide-TR sway3'}, 270);
  const r = document.querySelector('.R');
  if (r) setTimeout(() => {r.classList = 'box slide-R sway1'}, 360);
  const br = document.querySelector('.BR');
  if (br) setTimeout(() => {br.classList = 'box slide-BR sway4'}, 450);
  const b = document.querySelector('.B');
  if (b) setTimeout(() => {b.classList = 'box slide-B sway3'}, 540);
  const bl = document.querySelector('.BL');
  if (bl) setTimeout(() => {bl.classList = 'box slide-BL sway2'}, 630);
}
