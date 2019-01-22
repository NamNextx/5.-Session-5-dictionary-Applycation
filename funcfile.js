function presskey(even) {
    if (even.keyCode == 13) {
        var datainput = document.getElementById('idinput').value;
        var inputArray = new Array();
        var output=new Array()
        inputArray = ["Hello", "Fuck", "while", "red", 'blue'];
        output =['Xin chao',"...",'Mau trang','Mau do','Mau xanh'];

        var flag=false;
        for (var i = 0; i < inputArray.length; i++) {
            var key = inputArray[i];
            if (datainput === key) {
                document.getElementById('iddataoutput').innerText=output[i];
            } else flag=false;
        }

    }

}

function onkeypress() {
    window.addEventListener('keydown', presskey);
}
