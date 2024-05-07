input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    if (input.acceleration(Dimension.Z) > 100) {
        datalogger.log(
        datalogger.createCV("X", input.acceleration(Dimension.X)),
        datalogger.createCV("Y", input.acceleration(Dimension.Y)),
        datalogger.createCV("Z", input.acceleration(Dimension.Y))
        )
    }
})
input.onButtonPressed(Button.B, function () {
    datalogger.deleteLog()
    basic.showIcon(IconNames.No)
})
