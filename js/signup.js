function check(){
    var f = document.forms['form1'];
    var hvt = document.getElementById('hvt');
    var hvtr = /^[A-Z]{4,18}$/;
    var email = /^([a-zA-Z0-9]{3,20})+@+([a-z-]{3,10})\.([a-z]{3,5})$/;
    var acc = /^([a-z]{3,12})$/;
    var phone = /^0+([0-9]{8,18})$/;
    var pass = /^[$a-zA-Z0-9]{6,12}$/;
        var pass2 = /^[$a-zA-Z0-9]{6,12}$/;
  	if(form1.name.value === ''){
			
			alert('Insert your Name');
			form1.name.focus();
		
		return false;
	}else{
		if(!hvtr.test(f.hvt.value)){
		alert('Please Capitalize Your Name');
		return false;	
		}
	}
	if(form1.email.value === ''){
		alert('Insert Your Email');
		form1.email.focus();
		return false;
	}else{
		if(!email.test(f.email.value)){
		alert('Invalid Email');	
		}
    if(form1.acc.value === ''){
    	alert('Insert your username');
    	form1.acc.focus();
    	return false;
    }else{
    	if(!acc.test(f.acc.value)){
    		alert('Username must contain from 3-12 character');
    	}
    }
    if(form1.phone.value ===''){
    	alert('Insert your phone number');
    	form1.phone.focus();
    	return false;
    }else{
    	if(!phone.test(f.phone.value)){
    		alert('Invalid Phone Number');
    	}
    }	
    if(form1.pass.value ===''){
    	alert('Insert your password');
    	form1.pass.focus();
    	return false;
    }else{
    	if(!pass.test(f.pass.value)){
    		alert('Password must contain 6-12 character');
    	}
    }
    if(form1.pass2.value === ''){
    alert('Re-type your password');
    form1.pass2.focus();
    return false;
  }else{
    if(!pass2.test(f.pass2.value)){
      alert('Invalid Password');
    }else{
  	alert('Resignation Complete');
  }
  }
}
}