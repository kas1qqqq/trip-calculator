const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
)
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)

// Input data to price and consumption. Can be changed into an actual
let priceFuel = (document.getElementById('input-4').value = 52)
let consumption = (document.getElementById('input-5').value = 10.5)

function calculateBtn() {
  let earned = document.getElementById('input-1').value
  let distance = document.getElementById('input-2').value
  let spending = document.getElementById('input-3').value
  let priceFuel = document.getElementById('input-4').value
  let consumption = document.getElementById('input-5').value
  let fuelResult = (distance / 100) * consumption * priceFuel
  let resultExp = parseFloat(earned - fuelResult)
  let resultExpSpending =
    parseFloat(earned) - parseFloat(spending) - parseFloat(fuelResult)

  if (spending > 0 && earned === '' && distance === '') {
    document.getElementById('resultExp').innerHTML = 'Fill the two fields above'
  } else if (earned === '' && distance === '') {
    document.getElementById('resultExp').innerHTML = 'Enter a value first'
    document.getElementById('resultExp').style.visibility = 'visible'
  } else if (earned > 0 && distance === '') {
    document.getElementById('resultExp').innerHTML = 'Fill the distance'
  } else if (distance > 0 && earned > 0 && spending === '') {
    document.getElementById('resultExp').innerHTML =
      'Net profit: ' +
      new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'UAH',
      }).format(resultExp)
  } else if (distance > 0 && earned > 0 && spending > 0) {
    document.getElementById('resultExp').innerHTML =
      'Net profit: ' +
      new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'UAH',
      }).format(resultExpSpending)
  } else if (earned === '') {
    document.getElementById('resultExp').innerHTML = 'Fill the earning'
  } else {
    document.getElementById('resultExp').innerHTML = 'Enter the correct values'
  }
}

// Logic of clear button
function clearBtn() {
  let earned = document.getElementById('input-1').value
  let distance = document.getElementById('input-2').value
  let spending = document.getElementById('input-3').value
  document.getElementById('form').reset()
  if (earned === '' && distance === '' && spending === '') {
    document.getElementById('resultExp').innerHTML = 'Nothing to clear'
  } else if (earned > 0 || distance > 0 || spending > 0) {
    document.getElementById('resultExp').innerHTML = 'Cleared'
  } else {
    document.getElementById('resultExp').style.visibility = 'hidden'
  }
  document.getElementById('input-4').value = priceFuel
  document.getElementById('input-5').value = consumption
}

// Cross icon to clear inputs field
function tog(v) {
  return v ? 'addClass' : 'removeClass'
}
$(document)
  .on('input', '.clearable', function () {
    $(this)[tog(this.value)]('x')
  })
  .on('mousemove', '.x', function (e) {
    $(this)[
      tog(this.offsetWidth - 30 < e.clientX - this.getBoundingClientRect().left)
    ]('onX')
  })
  .on('touchstart click', '.onX', function (ev) {
    ev.preventDefault()
    $(this).removeClass('x onX').val('').change()
  })

// Changeable colors of header block and header's block car via chroma.js library
;(function setColorHeader() {
  document.getElementById('header-container').style.backgroundColor =
    chroma.random()
  setTimeout(setColorHeader, 1000)
})()
;(function setColorCarHeader() {
  const carHeader = document.getElementById('carHeader')
  const luminance = chroma(chroma.random()).luminance()
  carHeader.style.fill = luminance > 0.5 ? 'black' : 'white'
  setTimeout(setColorCarHeader, 1000)
})()