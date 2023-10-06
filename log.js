function getBatt(){
    if(navigator.getBattery){
      navigator.getBattery().then(battery =>{
       mainbat= Math.floor((battery.level)*100);
       bat.innerHTML=mainbat +"%"
       console.log(battery.chargingTime);
        if(mainbat<=10){
          document.getElementById("imge").src="javascipt frontend/battery/66ess24.png"
        
        }else if(mainbat>11 && mainbat<29){
          document.getElementById("imge").src="./66xx24.png";
        }
  
        else if (mainbat>30 && mainbat<=80 ){
          document.getElementById("imge").src="./6624dd.png"
        
        }else if (mainbat>80){
          document.getElementById("imge").src="./6624.png"
  
        }
       if(battery.charging==true){
        sta.innerHTML="charging "
        document.getElementById("sign").src="./charge.png"
        
        
       }else{
        sta.innerHTML="discharging"
        document.getElementById("sign").src="./discharge.png"
        
        
       }
      })
    }else{
      alert("not supported in the browser")
    }
  
  setTimeout(getBatt,25)
  }
  
  getBatt()
  