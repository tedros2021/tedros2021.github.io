      
      
      
      window.onload=firstCall();

               
    function secondCall(){
        var refresh=10;
        mytime= setTimeout('firstCall()',refresh);
    }

     

    function firstCall(){
        var x=new Date();
       var year=x.getFullYear();
      var month = x.getMonth()+1;
      var day=x.getDate();
      if(month<0){month='0'+month;}
      if(day<0){day='0'+day;}
      var x2=year+'-'+month+'-'+day;


      var hour=x.getHours();
      var minute=x.getMinutes();
      var second=x.getSeconds();
      if(hour<10){hour='0'+hour;}
      if(minute<10){minute='0'+minute;}
      if(second<10){second='0'+second;}
      var x2=x2+' '+hour+':'+minute+':'+second;

      
        
       var  displayedArea   = document.getElementById("s").innerHTML=x2;

             secondCall();

    }

      