const svg = document.getElementById("imgModeInput");
const input = document.getElementById("password");
    svg.addEventListener('click', showOrHidePass);

    function showOrHidePass(){
        if (input.type == 'text'){
            input.type = 'password';
        }
        else{
            input.type = 'text';
        }
   }