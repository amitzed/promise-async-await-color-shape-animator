
const changeColors = (delay, color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector('.circle.one').style.background = color;
      document.querySelector('.circle.two').style.background = color;

      resolve()
    }, delay)
  })
}

const coolShow = async () => {
  await changeColors(500, 'maroon');
  await changeColors(1000, 'indigo');
  await changeColors(1000, 'skyblue');
  document.querySelector('.circle.one').classList.add('myMotionA')
  document.querySelector('.circle.two').classList.add('myMotionB')
}

// coolShow();

const btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
  coolShow();
})
