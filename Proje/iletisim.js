function checkİletisim(event)
{
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email))
    {
        alert('Hatalı E-mail formatı.')
        return;
    }
    event.target.submit();
    
}