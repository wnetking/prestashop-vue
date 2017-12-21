export default function (event) {
  let container = event.target.parentNode
  let elementZoom = event.target

  elementZoom.style.opacity = 1
  container.style.backgroundImage = ''
  container.style.backgroundPosition = ''
}
