function register()
      {
         
          let pwd = document.getElementById("password").value;  
          let x = "12345678"
          if(confirm("Click YES to check password"))
          {  
          if(pwd==x)
          {
              alert("Login Succesful")
             
         }
          else
          {
              alert("Login not succesful")
          }
      }
      else{
          alert("failed")
      }
      }
// 
 /* */
