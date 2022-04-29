const timeLeft = document.getElementById('time-left')

const special = new Date ('04/13/2022')

const second = 1000
const minute = second*60
const hour = minute*60
const day = hour*24 //in milliseconds

const today = new Date()
let timerId
// if minus today from special, this will be in milliseconds. 

console.log(special)

//write a function to count down 
function countDown(){
  //in each countdown, want to see how many milliseconds are left. 
  const today = new Date()
  const timeSpan = special - today//assign each value each time. 
  //logics 
  console.log(timeSpan)

  if (timeSpan <= -day){
    timeLeft.innerHTML = ":)))" //FILLER
    clearInterval(timerId)
    return
  } 
  if (timeSpan <= 0){
    //it's been special already
    timeLeft.innerHTML = ':O'
    clearInterval()
    return
  }
  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan%day) / hour)
  const minutes = Math.floor((timeSpan%hour)/ minute)
  const seconds = Math.floor((timeSpan%minute)/second)
  
  timeLeft.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds '
  
}

setInterval(countDown, second)
