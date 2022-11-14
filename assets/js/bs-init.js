
import myJson from './Student.json' assert {type: 'json'};
(function (){
	//Global Variables

	//Get Form Value's
	document.getElementById("form").addEventListener("submit", e =>{
	var studentEmail =document.getElementById("emailInput")
	var studentPass = document.getElementById("passInput")
	
		e.preventDefault();

		validate(studentEmail.value,studentPass.value);
		studentEmail.value = "";
		studentPass.value = "";
		console.log(studentEmail);
	});

	function validate(email,pass){
		// filter json data
		var _myStudent_data = myJson.filter(element => element.Email.toUpperCase() == email.toUpperCase());
		if (_myStudent_data.length == 0){
			alert("No user found");
		}
		 else {
			for(var i of _myStudent_data){
				if(i.Password == pass){
					alert("Password match");
				}
				else {
					alert("Password does not Match")
				}
			}
		 }
	}
})();


if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	AOS.init();

	var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
	var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
		hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
		hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
	});
}, false);