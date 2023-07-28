document.addEventListener('DOMContentLoaded', () => {
  const boxList = ['TL', 'T', 'TR', 'L', 'R', 'BL', 'B', 'BR' ]
  const boxes = document.querySelectorAll('.box');
  const root = document.querySelector(':root')
  for (let i = 0; i < 8; ++i) {
    boxes[i].onclick = (event) => {
      event.target.className = `recenter ${boxList[i]}`;
      const exp = document.querySelector(`.expander-${boxList[i]}`);
      // console.log('exp', exp)
      // list of sections that need a vertical scroll bar
      if (['T'].includes(boxList[i])) {
        exp.className = 'blowUp yScroll';
      } else {
        exp.className = 'blowUp';
      }
      exp.firstElementChild.children[1].onclick = (event) => {
        // console.log('closeEvent', event);
        // set the class name of the parent of our X element to the correct expander
        event.target.parentNode.parentNode.className = `expander-${boxList[i]}`;
        // console.log(event.target.parentNode);
        moveSliders();
        // resize the input fields to shrink on closing
        if (['R'].includes(boxList[i])) {
          root.style.setProperty('--inputHeight', '0.1rem')
          root.style.setProperty('--inputHeightMsg', '4.5rem')
          root.style.setProperty('--inputSM-MarginBot', '0.5rem')
          root.style.setProperty('--inputLG-MarginTop', '-0.05rem')
          root.style.setProperty('--inputLG-MarginBot', '0.325rem')
          root.style.setProperty('--inputPadding', '0.05rem 0.1rem')
          root.style.setProperty('--inputSubmit-ht', '0.275rem')
          root.style.setProperty('--inputResizing', 'top 0.45s, left 0.45s, right 0.45s, bottom 0.45s, opacity 6s, width 0.45s, height 0.45s, visibility 6s, font-size 0.45s, padding 0.45s, margin 0.45s')
        }
      }
      // setTimeout(() => exp.classList.add('hmin'), 2000);

      // handle resizing of Contact Me fields on expanding
      if (['R'].includes(boxList[i])) {
        root.style.setProperty('--inputHeight', '2rem')
        root.style.setProperty('--inputHeightMsg', '20rem')
        root.style.setProperty('--inputSM-MarginBot', '3rem')
        root.style.setProperty('--inputLG-MarginTop', '-0.5rem')
        root.style.setProperty('--inputLG-MarginBot', '2rem')
        // root.style.setProperty('--inputLabelTop', '0.95rem')
        root.style.setProperty('--inputPadding', '0.5rem 1rem')
        root.style.setProperty('--inputSubmit-ht', '2.5rem')
        root.style.setProperty('--inputResizing', 'top 2s ease 0.2s, left 2s ease 0.2s, right 2s ease 0.2s, bottom 2s ease 0.2s, opacity 0.5s ease 0.2s, width 2s ease 0.2s, height 2s ease 0.2s, height 2s ease 0.2s, font-size 2s ease 0.2s, padding 2s ease 0.25s, margin 2s ease 0.25s')
      }
    }
  }
  // add event listener to message submittal
  const contactForm = document.getElementById('contactForm')
  contactForm.onsubmit = sendMessage
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

const sendMessage = (e) => {
  e.preventDefault()
  const body = {
    'username': e.target['0'].value,
    'embeds': [
      {
        'author': {
            'name': e.target['1'].value
        },
        'title': e.target['2'].value,
        'description': e.target['3'].value,
        // discord requires decimal color values 16777215 MAX
        'color': parseInt(e.target['0'].value.toHex(), 16)
      }
    ]
  }
  // console.log('b', body)
  fetch(
    'https://discord.com/api/webhooks/515718451780648971/JLzMDyrsVnita4EDD5-IaPxcuU8Nqj7TlMe2JbLvzG672ptpWkorrjT9RpYmi7ETNLJZ',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  )
    // convert the send button to a check mark, and clear entry fields
    // error handeling, needs circular placeholder
    // may need to put 2 elements of identicle size in submit location so the loading circle can spin
    .then(res => {
      // console.log(res)
      e.target.reset()
      e.target['4'].value = '✔'
    })
    .catch(err => console.log('Error', err))
}

// used to distinquish messages on discord
String.prototype.toHex = function() {
  var hash = 0;
  if (this.length === 0) return hash;
  // create 32 bit hash
  for (var i = 0; i < this.length; i++) {
      hash = this.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
  }
  // get a 16 bit hex value for colors, haven't seen this error out yet
  var color = '';
  for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 255;
      color += value.toString(16);
  }
  return color;
}
