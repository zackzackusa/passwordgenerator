 var password = 0;
 
 password=document.getElementById("pw");

 function genPassword() {
     chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     passwordLength = 12;
     password = "";
 for ( i = 0; i <= passwordLength; i++) {
     randomNumber = Math.floor(Math.random() * chars.length);
     password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("pw").value = password;
 }

 function copyPassword() {
     copyText = document.getElementById("pw");
     copyText.select();
     copyText.setSelectionRange(0, 999);
	 
        document.execCommand("copy");
    }