onload = () => {
//Login page AJAX & Login Validation (Event Handling)
    let testAjaxLoginObject = new XMLHttpRequest();
    testAjaxLoginObject.open("GET", "data/logininfo.json", true);

    //AJAX step 3 and 4
    testAjaxLoginObject.onreadystatechange = ParseData;
    testAjaxLoginObject.send(null);

    let ajaxLoginInfo;

    //Login Elements
    let loginUsername = document.getElementById("login-email");
    let loginPassword = document.getElementById("login-password");
    let loginButton = document.getElementById("login-button");

    let loginInfo;

    function ParseData(){
        if (testAjaxLoginObject.readyState == 4){
            ajaxLoginInfo = testAjaxLoginObject.responseText;
            loginInfo = JSON.parse(ajaxLoginInfo);
        }

        loginButton.onclick = function(){
            if (loginUsername.value === loginInfo[0].username && loginPassword.value === loginInfo[0].password){
                loginButton.href="calendar.html";
            } else{
                alert("Username/Password combination not found");
            }
        }
    }

}