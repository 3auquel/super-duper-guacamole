class Options{
    constructor(height,width,bg,fontSize,textAlign){
        this.height =height,
        this.width = width,
        this.bg= bg,
        this.fontSeize = fontSize,
        this.textAlign = textAlign;

    }
    makeDiv(){
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let par = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px;text-align:${this.textAlign}`;
        elem.style.cssText = par;
    }
}
let main = new Options(110,220,'black',300,'center');
var clown = new Options(50,120,'yellow',1000,'right');
const abi = new Options(40,22,'red',300,'left')

main.makeDiv();
clown.makeDiv();
abi.makeDiv();