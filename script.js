const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<120;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5
})
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="rgba(255,120,200,0.8)"
ctx.fill()

p.x+=p.vx
p.y+=p.vy

})

requestAnimationFrame(draw)

}

draw()

const song = document.getElementById("song")

window.onload = ()=>{

song.play()

setTimeout(()=>{
document.getElementById("avatars").style.transform="scale(0)"
document.getElementById("heart").style.opacity=1
},4000)

setTimeout(popHeart,7000)

}

function popHeart(){

for(let i=0;i<200;i++){

let g = document.createElement("div")

g.className="glitter"

g.style.left=window.innerWidth/2+"px"
g.style.top=window.innerHeight/2+"px"

document.body.appendChild(g)

let fall=Math.random()*window.innerHeight

g.animate([
{transform:"translate(0,0)"},
{transform:`translate(${Math.random()*400-200}px,${fall}px)`}
],{
duration:2000,
easing:"ease-out"
})

}

setTimeout(showGif,2000)

}

function showGif(){

document.getElementById("finalGif").style.opacity=1

}