let berty_bear = 0
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    berty_bear = randint(1, 6)
    if (berty_bear == 1) {
        music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (berty_bear == 2) {
        music.play(music.stringPlayable("B B B - - B B B ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (berty_bear == 3) {
        music.play(music.stringPlayable("A A - A - - A A ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    } else if (berty_bear == 4) {
        music.play(music.stringPlayable("G - G G G G - G ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (berty_bear == 5) {
        music.play(music.stringPlayable("F - F - F - F - ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        music.play(music.stringPlayable("E E - - E E - - ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})
