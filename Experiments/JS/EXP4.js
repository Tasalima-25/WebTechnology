function submitForm()
{
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Clear old messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";

    let isValid = true;

    // Name validation
    if (name === "")
    {
        document.getElementById("nameError").innerHTML = "Name Required!";
        isValid = false;
    }

    // Email validation
    if (email === "")
    {
        document.getElementById("emailError").innerHTML = "Email Required!";
        isValid = false;
    }
    else if (!email.includes("@"))
    {
        document.getElementById("emailError").innerHTML = "Invalid Email!";
        isValid = false;
    }

    // Password validation
    if (password === "")
    {
        document.getElementById("passwordError").innerHTML = "Password Required!";
        isValid = false;
    }
    
    

    // Success message
    if (isValid)
    {
        document.getElementById("successMsg").innerHTML = "Register Successfully!";
        document.getElementById("successMsg").style.color = "green";
        return false;
    }

    return isValid;
}
