 function I(i){return document.getElementById(i);}
      //INITIALIZE SPEEDTEST
      var s=new Speedtest(); //create speedtest object
      
      var meterBk=/Trident.*rv:(\d+\.\d+)/i.test(navigator.userAgent)?"#EAEAEA":"#80808040";
      var dlColor="#6060AA",
        ulColor="#616161";
      var progColor=meterBk;
      
      function mbpsToAmount(s){
        return 1-(1/(Math.pow(1.3,Math.sqrt(s))));
      }
      function format(d){
          d=Number(d);
          if(d<10) return d.toFixed(2);
          if(d<100) return d.toFixed(1);
          return d.toFixed(0);
      }
      
      //UI CODE
      var uiData=null;
      function startStop(){
          if(s.getState()==3){
          //speedtest is running, abort
          s.abort();
          data=null;
          I("startStopBtn").className="";
          initUI();
        }else{
          //test is not running, begin
          I("startStopBtn").className="c-refrash-icon-new";
          s.onupdate=function(data){
                  uiData=data;
          };
          s.onend=function(aborted){
                  I("startStopBtn").className="c-refrash-icon-new";
                  updateUI(true);
          };
          s.start();
        }
      }
      //this function reads the data sent back by the test and updates the UI
      function updateUI(forced){
        if(!forced&&s.getState()!=3) return;
        if(uiData==null) return;
        var status=uiData.testState;
        var ipp=uiData.clientIp;
        
        var newip=ipp.toString().split("-")[0];
         I("ip").textContent=newip;
      var mySubString = ipp.substring(
         ipp.lastIndexOf("-") + 1, 
         ipp.lastIndexOf(",")
      );
         I("server").textContent=mySubString;
         
         var srtt = ipp.substring(
         ipp.lastIndexOf(",") + 1, 
         ipp.lastIndexOf("(")
      );
      I("locat").textContent=srtt;
        I("dlText").textContent=(status==1&&uiData.dlStatus==0)?"...":format(uiData.dlStatus);
        //drawMeter(I("dlMeter"),mbpsToAmount(Number(uiData.dlStatus*(status==1?oscillate():1))),meterBk,dlColor,Number(uiData.dlProgress),progColor);
        I("ulText").textContent=(status==3&&uiData.ulStatus==0)?"...":format(uiData.ulStatus);
        //drawMeter(I("ulMeter"),mbpsToAmount(Number(uiData.ulStatus*(status==3?oscillate():1))),meterBk,ulColor,Number(uiData.ulProgress),progColor);
        I("pingText").textContent=format(uiData.pingStatus);
        I("jitText").textContent=format(uiData.jitterStatus);
        var prog=(Number(uiData.dlProgress)*2+Number(uiData.ulProgress)*2+Number(uiData.pingProgress))/5;
        document.getElementById("myBt").style.height=(100*prog)+"%";
      }
      function oscillate(){
        return 1+0.02*Math.sin(Date.now()/100);
      }
      //update the UI every frame
      window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||(function(callback,element){setTimeout(callback,1000/60);});
      function frame(){
        requestAnimationFrame(frame);
        updateUI();
      }
      frame(); //start frame loop
      //function to (re)initialize UI
      function initUI(){
        //drawMeter(I("dlMeter"),0,meterBk,dlColor,0);
        //drawMeter(I("ulMeter"),0,meterBk,ulColor,0);
        I("dlText").textContent="";
        I("ulText").textContent="";
        I("pingText").textContent="";
        I("jitText").textContent="";
        I("ip").textContent="";
      }