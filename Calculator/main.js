function insert(num){
	document.form.textw.value=document.form.textw.value+num;
}

function equal(){
	var exp = document.form.textw.value;
	if (exp) {
			document.form.textw.value=eval(exp);
	}
}

function clean(){
	document.form.textw.value="";
}

function back(){
	var exp = document.form.textw.value;
	document.form.textw.value=exp.substring(0,exp.length-1);
}

function per(){
	var exp = document.form.textw.value;
	document.form.textw.value = exp/100
}