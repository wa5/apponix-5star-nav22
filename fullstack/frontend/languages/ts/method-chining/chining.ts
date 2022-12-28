class Bottel{
color:string
cap:boolean
height:string
constructor(){
    this.cap=true
    this.color='white'
    this.height="5inch"
}
withbottel(){
    console.log('we strore wateer')
    return this
}
withcap(){
    console.log('we preserve water')
    return this
}
}
var samsung=new Bottel()
samsung.withbottel().withcap()
document.getElementById('root')
document.nodeValue