function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

  let otp_val=Math.floor(Math.random()  *10000);

  let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
    Email.send({
        SecureToken : "f4f75b7b-f7cb-411c-ba9d-bb569f2180b7",
        To : 'email.value',
        From : "vennaimalaisaran@gmail.com",
        Subject : "OTP verify",
        Body : emailbody,
    }).then(
      message =>{
        if(message ==="OK"){
            alert("OTP sent to your mail "+email.value);
            otpverify.computedStyleMap.display ="flex";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');
            otp_btn.addEventListener('click', () => {
                if(otp_inp.value == otp_val){
                    alert("Email Address Verified");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );
}