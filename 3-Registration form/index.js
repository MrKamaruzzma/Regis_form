function validation(){
    
    var stdname = document.getElementById("stdname").value
    var stdlname = document.getElementById("stdlname").value
    var stdno = document.getElementById("stdno").value
    var stdemail = document.getElementById("stdemail").value
    var stdpass = document.getElementById("stdpass").value
    var stdcpass = document.getElementById("stdcpass").value
    if(stdname == ""){
        document.getElementById("fname").innerHTML="**Please fill the first name!";
        return false;
    }
    if(stdlname == ""){
        document.getElementById("lname").innerHTML = "**Please fill the last name!";
        return false;
    }
    if(stdno == ""){
        document.getElementById("mobno").innerHTML = "**Please fill the Mob no.!";
        return false;
    }
    if(stdno.length <=9 ){
        document.getElementById("mobno").innerHTML = "**Please should be 10 digit!";
        return false;
    }
    if(stdemail == ""){
        document.getElementById("email").innerHTML = "**Please fill the email!";
        return false;
    }
    if(stdpass == ""){
        document.getElementById("pass").innerHTML = "**Please fill the password!";
        return false;
    }
    if(stdpass.length <=7 ){
        document.getElementById("pass").innerHTML = "**Password should be 8 digit!";
        return false;
    }
    if(stdcpass == ""){
        document.getElementById("cpass").innerHTML = "**Please fill the confirm pass!";
        // document.getElementById("cpass").focus();
        return false;
        
    }
    if(stdpass != stdcpass){
        document.getElementById("cpass").innerHTML = "**Confirm password should be same!"
        return false;
    }
    else{
        alert("Your form is submitted");
    }
}