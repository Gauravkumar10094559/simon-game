$(document).ready(function(){
var store=[];
var userStore=[];
var i=0,l=0;
var length=1;
var isWinning=true;
var timeInterval=2000;
var temp,hold;
var stop;
var control=true;
	$("#start").on("click",function(){
		start();
	});

	function start()
	{
		if(isWinning==true)
		{
			call();
		}		 	
	}

	function call()
	{
		 
		if(length<=20)
		{
			if(length==9)
			{
				timeInterval=1000;
			}
			if(length==13)
			{
				timeInterval==500;
			}
		 
		interval();
			
		}
		else{
			  
			alert("u won:");
		}
		 
			
	}

	function interval()
	{
				 
				simon();
				 
				l++;
				 
				if(l>=length)
				{
					length++; 
					console.log("calling user");
					press();
	
				}	
				else{
					setTimeout(interval,timeInterval);	
				}	
						 

	}

	function simon()
	{
			 
			var id=randomClass();
			play(id);
			var backCol=setBackground(id);
			var original=$("button."+id).css("background-color");		 

			$("button."+id).css("background",backCol);
			 
			setTimeout(function(){
				$("button."+id).css("background",original);
			},1000);

			store.push(id);
			console.log("store=");
			console.log(store);

	}



		$(".btn").on("click",function(){
			 
			temp=$(this).attr("class");

			temp=temp.split(" ");
			hold=temp[1];

			play(hold);
			  
			userStore.push(hold);

			temp={};
			hold=null;

			press();
			
		});	


		function play(color) {
			 
			let audio;
			if(color==='btn-success') {
				audio=document.getElementById('green');
				audio.play();
			}
			else if(color==='btn-danger') {
				audio=document.getElementById('red');
				audio.play();
			}
			else if(color==='btn-warning') {
				audio=document.getElementById('yellow');
				audio.play();
			}
			else {
				audio=document.getElementById('blue');
				audio.play();
			}
		}




	function press()
	{	 
		if(userStore.length===store.length) {
						callCompare();
		}	 			 
	}
	
	function callCompare() {

		console.log("userStore=");
	    console.log(userStore);

		if(userStore.length>=store.length)
		{
			compare();		
		}
		else 
		{
			ready=true;
			press();
		}
	}	

	function compare()
	{
	i=0;
		while(i<store.length)
		{
			if(store[i]===userStore[i] && store.length==userStore.length)
			{
				console.log("equal compare//////////////////");
				isWinning=true;
				control=true;
			}

			else{
				console.log("not equal compareXXXXXXXXXXXXXXXXX");
				control=false;
				init();
				isWinning=false;
				 
				length--;
				i=store.length;
				 
				call();
			}
			i+=1;
		}
		if(i>=store.length && control)
		{
			 
			init();
			$("#score").html(length);
			console.log("-------------------------");

			setTimeout(function(){
				start();
			},1000);	
		}
	}

	function init()
	{
		store=[];
		userStore=[];
		i=0;
		l=0;
		hold=null;
		ready=true;
		isWinning=true;
 
	}
	function randomClass()
	{
		var random=Math.floor(Math.random()*4);
		if(random==0)
		{
			return "btn-danger";
		}
		else if(random==1)
		{
			return "btn-primary";
		}
		else if(random==2)
		{
			return "btn-success";
		}
		else if(random==3)
		{
			return "btn-warning";
		}	
	}

	function setBackground(id)
	{
		var temp=id.split("-");
		temp=temp[1];
		if(temp=="danger")
		{
			return "#ac2925";
		}
		else if(temp=="primary")
		{
			return "#204d74";
		}
		else if(temp=="success")
		{
			return "#398439";
		}
		else  
		{
			return "#d58512";
		}
	}

});