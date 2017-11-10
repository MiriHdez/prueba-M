window.onload=function(){
	var vrItma=1;
	fnAutoC();
	function fnCarrusel(id){
		var i;
		var item = document.getElementsByClassName("clItimg");
		var vrbtn = document.getElementsByClassName("clbtnIt");
		
	  if (id > item.length) {vrItma = 1;} 
	  if (id < 1) {vrItma = item.length;}
	  for (i = 0; i < item.length; i++) {
	      item[i].style.display = "none"; 
	  }
	  for (i = 0; i < vrbtn.length; i++) {
	    vrbtn[i].className = vrbtn[i].className.replace(" active", "");
	  }
	  item[vrItma-1].style.display = "block";
	  vrbtn[vrItma-1].className += " active"; 
	}


	function fnAutoC(){
    fnCarrusel(vrItma);
		vrItma++;
		setTimeout(fnAutoC, 4000);
	}
}