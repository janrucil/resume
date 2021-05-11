//send email & show english text
function sendEmail()
{       
    if(document.getElementById("message").value ==0)
    {    
        alert("Your message is blank");
    }
    else 
    {
        send();   
        alert("I received your message, thank you");    
        reset();     
    }
    return false;
}

//send email & show german text
function nachrichtSenden()
{       
    if(document.getElementById("message").value ==0)
    {    
        alert("Ihre Nachricht ist leer");
    }
    else 
    { 
        send();  
        alert("Ich habe Ihre Nachricht erhalten, danke!");    
        reset();    
    }
    return false;
}


//send email & show czech text
function poslatZpravu()
{    
   
    if(document.getElementById("message").value ==0)
    {    
        alert("Vaše zpráva je prázdná");
    }
    else 
    {      
        send(); 
        alert("Vaši zprávu jsem obdržel, díky!");    
        reset();    
    }
    return false;
}


//send the email
function send()
{      
    // var url = "http://185.126.23.114/mailtool/api/email/send?message=" + document.getElementById("message").value + "&from=" + document.getElementById("from").value;
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", url, true); // false for synchronous request
    // xmlHttp.send();   
    
    



      // Add the iframe with a unique name
  var iframe = document.createElement("iframe");
  var uniqueString = "B4B3B1B0BV";
  document.body.appendChild(iframe);
  iframe.style.display = "none";
  iframe.contentWindow.name = uniqueString;

  // construct a form with hidden inputs, targeting the iframe
  var form = document.createElement("form");
  form.target = uniqueString;
  form.action = "https://mailtool.azurewebsites.net/api/email/send";
  form.method = "GET";

  // repeat for each parameter
  var input = document.createElement("input");
  input.type = "hidden";
  input.name = "message";
  input.value = document.getElementById("message").value;
  form.appendChild(input);

  var input2 = document.createElement("input2");
  input2.type = "hidden";
  input2.name = "from";
  input2.value = document.getElementById("from").value;
  form.appendChild(input2);

  document.body.appendChild(form);
  form.submit();

}


//reset the form
function reset()    
{
    document.getElementById("message").value = "";    
    document.getElementById("from").value = "";  
}
