const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
)
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)

//Can be changed into an actual
let priceFuel = (document.getElementById('input-4').value = 52) //Price fuel
let consumption = (document.getElementById('input-5').value = 10) //Consumption

function calculateBtn() {
  var earned = document.getElementById('input-1').value
  var distance = document.getElementById('input-2').value
  var tip = document.getElementById('input-3').value
  var priceFuel = document.getElementById('input-4').value
  var consumption = document.getElementById('input-5').value
  var fuelResult = (distance / 100) * consumption * priceFuel
  var resultExp = parseFloat(earned - fuelResult)
  var resultExpTip =
    parseFloat(tip) + parseFloat(earned) - parseFloat(fuelResult)

  if (tip > 0 && earned === '' && distance === '') {
    document.getElementById('resultExp').innerHTML = 'Fill the two fields above'
  } else if (earned === '' && distance === '') {
    document.getElementById('resultExp').innerHTML = 'Enter a value first'
    document.getElementById('resultExp').style.visibility = 'visible'
  } else if (earned > 0 && distance === '') {
    document.getElementById('resultExp').innerHTML = 'Fill the distance'
  } else if (distance > 0 && earned > 0 && tip === '') {
    document.getElementById('resultExp').innerHTML =
      'Net profit: ' + parseFloat(resultExp).toFixed(2) + ' uah'
  } else if (distance > 0 && earned > 0 && tip > 0) {
    document.getElementById('resultExp').innerHTML =
      'Net profit: ' + parseFloat(resultExpTip).toFixed(2) + ' uah'
  } else if (earned === '') {
    document.getElementById('resultExp').innerHTML = 'Fill the earning'
  } else {
    document.getElementById('resultExp').innerHTML = 'Enter the correct values'
  }
}

function clearBtn() {
  var earned = document.getElementById('input-1').value
  var distance = document.getElementById('input-2').value
  var tip = document.getElementById('input-3').value
  document.getElementById('form').reset()
  if (earned === '' && distance === '' && tip === '') {
    document.getElementById('resultExp').innerHTML = 'Nothing to clear'
  } else if (earned > 0 || distance > 0 || tip > 0) {
    document.getElementById('resultExp').innerHTML = 'Cleared'
  } else {
    document.getElementById('resultExp').style.visibility = 'hidden'
  }
  document.getElementById('input-4').value = priceFuel
  document.getElementById('input-5').value = consumption
}

//clerable cross
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

//changeable header background 
function randomColor() {
  return (
    '#' + ('000000' + ((Math.random() * 0xb9bd86) << 0).toString(16)).slice(-6)
  )
}

function setColor() {
  document.getElementById('header-container').style.backgroundColor =
    randomColor()
  setTimeout(setColor, 600)
}
setColor()
