let context;
window.onload = function() {
    this.console.log("Welcome :) Stay Home Stay Safe")
    context = new AudioContext();
}


setInterval(function(){
    console.log("Call made");
    let cssVar = 'ufss-slotgroup-heading-text a-text-normal';
    if(document.getElementsByClassName(cssVar) && document.getElementsByClassName(cssVar).length > 0) { 
            if(document.getElementsByClassName(cssVar)[0].innerHTML.includes('Next')) {
                let o = context.createOscillator();
                o.type = "sine"
                let  g = context.createGain();
                o.connect(g);
                g.connect(context.destination);
                o.start(0);
                let frequency = 261.6;
                o.frequency.value = frequency;
                g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 5);
                console.log("Happy shopping ! ");
           
        }
    } else {
        console.log("Checking!!");
        if(document.getElementsByClassName('a-alert-heading')[1].innerHTML.includes('No')){
            window.location.reload();        
        }
    };
},60000);
    