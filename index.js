'use strict'
const Particle = require('particle-api-js')
const particle = new Particle()

// Ingreso
particle.login({ username: process.env.EMAIL, password: process.env.PASSWD }).then(
  function onLogin (data) {
    // Si el ingreso es exitoso obtener los dispositivos
    var token = data.body.access_token
    obtainDevices(token)
  },
  function onError (err) {
    // Error en el login
    console.log('there was an error: ', err)
  }
)

// Obtiene dispositivos asociados a la cuenta
function obtainDevices (token) {
  particle.listDevices({ auth: token }).then(
    function gotDevices (devices) {
      // si se obtuvieron los dispositivos
      for (var i = 0; i < devices.body.length; i++) {
        // Detectar dispositivos conectados
        if (devices.body[i].connected) {
          // Ejecutar una función remota para el dispositivo conectado
          // Funciones disponibles:
          // - ledOn: enciende un led, parámetros: lednumero 1-11,R,G,B - ejemplo '5,255,20,120'
          // - ledOff: apaga un led, parámetros: lednumero - ejemplo '5'
          // - allLedsOn: enciende todos los led, parámetros: R,G,B - ejemplo '255,20,120'
          // - allLedsOff: apaga todos los led, parámetros: ninguno ''
          // - rainbow: realiza una animación de arcoíris , parámetros: tiempo - ejemplo '30'
          // - gauge: realiza una animación de un valor de 1-66 en los leds , parámetros: valor - ejemplo '20'
          // - play: Toca una melodía indicando las notas a tocar, parámetros: las notas separadas por , - ejemplo 'E5,8,G5,8,E6'
          callFunction(devices.body[i], token, 'rainbow', '10')
          callFunction(devices.body[i], token, 'play', 'E5,8,G5,8,E6,8,C6,8,D6,8,G6,8')

          // Detecta eventos en los botones del dispositivo
          particle.getEventStream({ deviceId: devices.body[i].id, auth: token }).then(function (stream) {
            stream.on('event', function (data) {
              console.log('Event: ', data)
            })
          })
        } else {
          console.log(`Device: ${devices.body[i].name} is offline`)
        }
      }
    },
    function onError (err) {
      // Error obteniendo dispositivos
      console.log('there was an error: ', err)
    }
  )
}

// Ejecuta una funcion remota
function callFunction (device, token, fName, arg) {
  var fnPr = particle.callFunction({ deviceId: device.id, name: fName, argument: arg, auth: token })

  fnPr.then(
    function (data) {
      console.log(`Function '${fName}' executed succesfully:`, data)
    },
    function (err) {
      console.log('there was an error: ', err)
    }
  )
}
