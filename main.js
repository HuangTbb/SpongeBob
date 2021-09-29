import string from './css.js'

const player = {
    n : 0,
    time: 50,
    string2: '',
    timer: undefined,
    init: ()=>{
        player.bindEvent()
        player.timer =  player.play()
    },
    ui: {
        text : document.querySelector('.text'),
        demo : document.querySelector('.demo')
    },
    events: {
        '.playBtn': 'play',
        '.stopBtn': 'pause',
        '.slowestBtn': 'slowest',
        '.slowBtn': 'slow',
        '.fastBtn': 'fast'
    },
    bindEvent: ()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                document.querySelector(key).onclick = player[player.events[key]]
            }
        }
    },
    run : () => {
        if(string[player.n] === '\n'){
            player.string2 += '<br>'
        }else if(string[player.n] === ' '){
            player.string2 += '&nbsp'
        } else{
            player.string2 += string[player.n]
        }
        player.ui.text.innerHTML = player.string2
        player.ui.demo.innerHTML = string.substring(0, player.n)
        player.n += 1
        if(player.n > string.length -1){
            window.clearInterval(player.timer)
            return
        }
        player.ui.text.scrollTop = player.ui.text.scrollHeight
    },
    pause : ()=>{
        window.clearInterval(player.timer)
    },
    play : ()=>{
        if(player.n > string.length -1){
            player.pause()
            player.n = 0
            player.string2 = ''
            player.ui.text.innerHTML = ''
            player.ui.demo.innerHTML = ''
        }
        return player.timer = setInterval(player.run, player.time)
    },
    slowest : ()=>{
        player.pause()
        player.time = 100
        player.play()
    },
    slow : ()=>{
        player.pause()
        player.time = 30
        player.play()
    },
    fast : ()=>{
        player.pause()
        player.time = 0
        player.play()
    }
}


player.init()

