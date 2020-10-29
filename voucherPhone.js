
function generate() {
	var t = ncard.value;
	var s = net.value;
	var m = 'MTN';
	var G = 'GLO';
	var A = 'AIRTEL';
	var E = 'ETISALAT';
	var k = amount.value;
	
	for(var i=0;i<t;i++){

            var rnd = Math.floor(Math.random() * 900000000000000000000);

             var rndToString=rnd.toString();

             var card = rndToString.substr(0,4) +"-"+ rndToString.substr(4,4) +"-"+ rndToString.substr(8,4) +"-"+ rndToString.substr(12,5);

              var spl = card.split("-");

              var credit = spl.join(''); 
             
             if(localStorage.getItem('mtnBalance') == null){
             	localStorage.setItem('mtnBalance','0');
             }
             if(localStorage.getItem('airtelBalance') == null){
             	localStorage.setItem('airtelBalance','0');
             }

             if(localStorage.getItem('gloBalance') == null){
             	localStorage.setItem('gloBalance','0');
             }
             if(localStorage.getItem('etiBalance') == null){
             	localStorage.setItem('etiBalance','0');
             }


			var x = Object.keys(localStorage);
			
			// for (var i = 0; i < x.length; i++) {
			
			
			 if(s =="MTN"){
               var mcode = "*555*"+credit+"#";
            }
            else if(s=="GLO"){
               var gcode = "*123*"+credit+"#";
            }
            else if(s =="AIRTEL"){
               var acode = "*126*"+credit+"#";
            }	

            else if (s=="ETISALAT") {
            	var ecode = "*223*"+credit+"#";
            }	

              var pack = "store"+ x.length;



              console.log(pack);

              	
               var obj = {network:s, amount:k,loading:credit, mtnCode:mcode, gloCode:gcode, airCode:acode, etiCode:ecode };

             var str = JSON.stringify(obj);
             
               localStorage.setItem(pack,str);
			
			

             if (s==m) {
             	var j= 'MTN-NG'+'<br>'+ '<b>'+'Amount-'+k+'</b>'+'<br>'+'<b>'+'PIN:'+card+'</b>'+'<br>'+'Dial *555*pin# to recharge'+'<hr>'+'<br>';
             }
             
             if (s==G) {

             	var j= 'GLO-NG '+'<br>'+ '<b>'+'Amount-'+k+'</b>'+'<br>'+'<b>'+'PIN:'+card+'</b>'+'<br>'+'Dial *123*pin# to recharge'+'<hr>'+'<br>';
             }


             if (s==A) {

             	var j= 'AIRTEL-NG '+'<br>'+ '<b>'+'Amount-'+k+'</b>'+'<br>'+'<b>'+'PIN:'+card+'</b>'+'<br>'+'Dial *126*pin# to recharge'+'<hr>'+'<br>';
             }

             if (s==E) {

             	var j= 'ETISALAT-NG '+'<br>'+ '<b>'+'Amount-'+k+'</b>'+'<br>'+'<b>'+'PIN:'+card+'</b>'+'<br>'+'Dial *232*pin# to recharge'+'<hr>'+'<br>';
             }

             	result.innerHTML+= j;

        }
           
}


	var a = setInterval(clock,1000);

	function clock() {
	 	// body...
	 	var a = new Date();
	 	document.getElementById('ba').innerHTML = a.getHours()+':'+ a.getMinutes()+':'+a.getSeconds();
	 				}

		$(function () {
					$("#call").click(function () {

						$("#scr").hide();
						$("#ps").show();
						//$("#scr").addClass('hide');
						 //$("#ps").addClass('show');
						// $(".scr").hide('slide');
						// $(".scr").toggle()

						

						// body...
					})	
})


			function num(n) {
					document.getElementById('cS').value+=n;
				}


				function del() {
					var c = cS.value.length-1;
					var d = cS.value.slice(0, c);

					cS.value = d;
				}

	function dial() {

		if (cS.value=='*556#') {
			var mtbal=localStorage.getItem('mtnBalance');

            document.getElementById("cS").value="your mtn balance is #"+mtbal;

		}

		else if(cS.value=='*123#') {

		 	var atbal = localStorage.getItem('airtelBalance');
		 	document.getElementById("cS").value="your airtel balance is #"+atbal; 

		 }

		 else if(cS.value=='#124#') {

		 	var glbal = localStorage.getItem('gloBalance');
		 	document.getElementById("cS").value="your glo balance is #"+glbal; 

		 }

		 else if(cS.value=='*232#') {

		 	var etbal = localStorage.getItem('etiBalance');
		 	document.getElementById("cS").value="your etisalat balance is #"+etbal; 

		 }


      else{ 
       var bal =parseInt(localStorage.getItem('mtnBalance'));
        var atbal =parseInt(localStorage.getItem('airtelBalance'));
        var gbal =parseInt(localStorage.getItem('gloBalance'));
        var ebal =parseInt(localStorage.getItem('etiBalance'));


       var m = Object.keys(localStorage);

   for (var t = 0; t < m.length; t++) {
   	  var fetch=JSON.parse(localStorage.getItem(m[t]));

//    	  alert(fetch.network
// );


		

   	   if (cS.value== fetch.mtnCode) {
          var load = bal + parseInt(fetch.amount);
          localStorage.setItem('mtnBalance',load);
          cS.value="You recharge #"+fetch.amount+" successfully";
          localStorage.removeItem('fetch.mtnCode');
		 	
		}


		else if (cS.value == fetch.airCode) {
		var load = atbal + parseInt(fetch.amount);
          localStorage.setItem('airtelBalance',load);
          cS.value="You recharge #"+fetch.amount+" successfully";
          // localStorage.removeItem(fetch.airtimeCode);
			}

		else if (cS.value == fetch.gloCode) {
		var load = gbal + parseInt(fetch.amount);
          localStorage.setItem('gloBalance',load);
          cS.value="You recharge #"+fetch.amount+" successfully";

		}	

		else if(cS.value == fetch.etiCode) {
		var load = ebal + parseInt(fetch.amount);
          localStorage.setItem('etiBalance',load);
          cS.value="You recharge #"+fetch.amount+" successfully";

		}	

   }
		
	// alert(JSON.parse(m[0]).network);

		// var n = JSON.parse(m);

		// 	alert(n.big);
		//  if (cS.value== n.airtimeCode) {

		//  	cS.value = k;
		// }
	}





}





























