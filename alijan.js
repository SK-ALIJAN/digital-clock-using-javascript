console.log("run here your code... ");

function clock() {
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let second=document.getElementById('seconds');
    let ampm= document.getElementsByClassName('pm-am')


    h=new Date().getHours();
    m=new Date().getMinutes();
    s=new Date().getSeconds();

    a_p=(h>=12)? "PM": "AM";

    if(h>13){
        h=h-12
    };

    if(h<10){
    h="0"+h
    };
    if(m<10){
    m="0"+m
    };
    if (s<10) {
        s="0"+s
    }

    hours.innerHTML=h;
    minutes.innerHTML=m;
    second.innerHTML=s;
    ampm.innerHTML=a_p

}
setInterval(clock,1000)