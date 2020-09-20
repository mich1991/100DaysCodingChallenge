// create a canvas object from HTML
const canvas = document.querySelector('#canvas')
console.log(canvas.height)
// create 2d drawing object
const ctx = canvas.getContext('2d')
// calc radius
let radius = (canvas.height / 2)
//  move x,y to the center of canvas
ctx.translate(radius, radius)
// reduce radius for clock
radius *= 0.9


drawClock = () => {
    drawFace(ctx, radius)
    drawNumbers(ctx, radius)
    drawTime(ctx, radius)
}

drawFace = (ctx, radius) => {
    let grad;
    // draw a white circle for the face of the clock
    ctx.beginPath()
    ctx.arc(0, 0, radius, 0, Math.PI * 2)
    ctx.fillStyle = '#fff'
    ctx.fill()
    // create a radial gradient (inner, middle, and outer edge of clock)
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
    grad.addColorStop(0, '#333')
    grad.addColorStop(0.5, '#fff')
    grad.addColorStop(1, '#333')
    //define gradient as stroke style
    ctx.strokeStyle = grad
    ctx.lineWidth = radius * 0.1
    ctx.stroke()
    //draw the center of the clock
    ctx.beginPath()
    ctx.arc(0, 0, radius * 0.1, 0, Math.PI * 2)
    ctx.fillStyle = '#333'
    ctx.fill()

}

drawNumbers = (ctx, radius) => {
    let ang
    let num
    ctx.font = radius * 0.15 + 'px arial'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6
        ctx.rotate(ang)
        ctx.translate(0, -radius * 0.85)
        ctx.rotate(-ang)
        ctx.fillText(num.toString(), 0, 0)
        ctx.rotate(ang)
        ctx.translate(0, radius * 0.85)
        ctx.rotate(-ang)


    }
}

drawHand = (ctx, pos, length, width) => {
    ctx.beginPath()
    ctx.lineWidth = width
    ctx.lineCap = 'round'
    ctx.moveTo(0, 0)
    ctx.rotate(pos)
    ctx.lineTo(0, -length)
    ctx.stroke()
    ctx.rotate(-pos)
}




drawTime = (ctx, radius) => {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    // hour
    hour = hour % 12
    // calc angle hour hand
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60))
    //make hour hand 50% of canvas's radius
    drawHand(ctx, hour, radius * 0.5, radius * 0.07)
    //minute
    //calculate angle of minute hand
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    //make minute hand 80% of canvas's radius
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    //second
    //calculate angle of second hand
    second = (second * Math.PI / 30);
    //make second hand 90% of canvas's radius
    drawHand(ctx, second, radius * 0.9, radius * 0.02);

}


setInterval(drawClock, 1000)