let distance = 0
basic.forever(function () {
    distance = 3 + sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Inches
    )
    basic.showNumber(distance)
})
