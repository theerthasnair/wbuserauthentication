function validate() 
{
  
  
var username = document.getElementById("username").value;
 
 var password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
  
  alert("Login successfully");

  } 
  
else 
{
    
alert("Login Failed.Try again");
 
 }
  
return false;

  
}

function Footer()
{
  return(
    <footer>
    <p>Copyright by theerthasnair @ {new Date().getFullYear()}</p>
    </footer>
  );
}