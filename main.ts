input.onButtonPressed(Button.A, function () {
    number_2 += 1
    basic.showString("" + (number_2))
    basic.pause(200)
    if (number_2 > 20) {
        basic.showString("Too High")
        number_2 = 0
        basic.showString("" + (number_2))
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (number_2 < number) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
    } else if (number_2 > number) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Yes)
        number = 0
        number_2 = 0
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    number_2 += -1
    basic.showString("" + (number_2))
    basic.pause(200)
    if (number_2 < 0) {
        basic.showString("Too Low")
        number_2 = 0
        basic.showString("" + (number_2))
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    number = randint(0, 20)
})
let number_2 = 0
let number = 0
number = randint(0, 20)
basic.forever(function () {
	
})
