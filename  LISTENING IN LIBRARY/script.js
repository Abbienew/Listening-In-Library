var soundEls = document.querySelectorAll('[sound]')

for (var i = 0; i < soundEls.length; i++) {
  var item = soundEls[i];
  item.addEventListener('click', e => {
    let el = e.target
    let isPlaying = el.components.sound.isPlaying
    soundEls.forEach(soundEl => {
      soundEl.components.sound.stopSound()
    })
    
    if (!isPlaying)
      el.components.sound.playSound()
  })
}