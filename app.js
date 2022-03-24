const UpdateTime = (dd, hh, mm, ss) => {
    const displayDay = document.querySelector("#days h1")
    const displayHour = document.querySelector("#hours h1")
    const displayMinute = document.querySelector("#minutes h1")
    const displaySecond = document.querySelector("#seconds h1")

    dd.toString().length > 1 ? displayDay.innerText = dd : displayDay.innerText = "0" + dd
    hh.toString().length > 1 ? displayHour.innerText = hh : displayHour.innerText = "0" + hh
    mm.toString().length > 1 ? displayMinute.innerText = mm : displayMinute.innerText = "0" + mm
    ss.toString().length > 1 ? displaySecond.innerText = ss : displaySecond.innerText = "0" + ss
}

const countdown = () => {
    const countDate = new Date("Dec 23, 2022 00:00:00").getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor(gap % day / hour)
    const textMinute = Math.floor(gap % day % hour / minute)
    const textSecond = Math.floor(gap % day % hour % minute / second)

    UpdateTime(textDay, textHour, textMinute, textSecond)
}

setInterval(countdown, 1000)