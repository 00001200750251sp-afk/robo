music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
while (false) {
	
}
radio.sendNumber(0)
basic.forever(function () {
    radio.sendNumber(0)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
