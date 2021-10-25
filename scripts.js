/* Add your JavaScript to this file */
window.onload = function(){windowLoad()}
       
    function windowLoad(){
   
    const form = document.querySelector('form')

        form.addEventListener('submit',function(event){
            
            event.preventDefault()//prevents the form from auto submitting

            let emailAddress = document.getElementById('email').value
            let message = document.querySelector('.message')
            if (emailAddress=="")   {
                //alert("Invalid")
                message.innerHTML= "Please enter valid email Address"
                return false
            }else{
                message.innerHTML= "Thankyou! Your email address " + emailAddress + " has been added to our mailing list!"
                form.reset()
                //alert('submitted')
                return false
                
            }
            
                
        })
    }