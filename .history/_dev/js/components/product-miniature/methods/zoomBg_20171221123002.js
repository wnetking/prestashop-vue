export default function (event) {
  let container = event.target.parentNode
  let elementZoom = event.target
  var x = event.offsetX == undefined ? event.layerX : event.offsetX
  var y = event.offsetY == undefined ? event.layerY : event.offsetY

  let e = {
    w: elementZoom.offsetWidth,
    h: elementZoom.offsetHeight
  }

  let c = {
    x: (x / (e.w / 70)),
    y: (y / (e.h / 100))
  }

  elementZoom.style.opacity = 0
  container.style.transform = 'scale(1.2)'
  container.style.backgroundImage = `url(${elementZoom.dataset.largeImg})`
  container.style.backgroundPosition = c.x + '% ' + c.y + '%'
}
