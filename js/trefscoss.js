const trefscoss = (function() {
  
    function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function test() {
    return "HI!"
  }

  function right() {
    document.querySelectorAll('.right').forEach(box => {
      const ddecw = document.documentElement.clientWidth;
      const rect = box.getBoundingClientRect();
      const distance = ddecw - rect.left;
      box.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      box.style.transform = `translateX(${distance}px)`;
      box.style.opacity = '0'
      return wait(600)
    })
  }

  function left() {
    document.querySelectorAll('.left').forEach(box => {
      const rect = box.getBoundingClientRect();
      const distance = -rect.left;
      box.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      box.style.transform = `translateX(${distance}px)`;
      box.style.opacity = '0'
      return wait(600)
    })
  }
  async function fadeout() {
    await Promise.all([right(), left()])
  }
  return {
    test,
    right,
    left,
    fadeout
  };
}
})()
