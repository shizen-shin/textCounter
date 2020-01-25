(function(){
    'use strict';

    const selected = document.getElementById("selected").value;
    document.getElementById("limit").textContent = selected;
    var maxNumber = Number(selected);

    maxbtn.addEventListener('click',function(){
        const str = document.getElementById("selected").value;
        document.getElementById("limit").textContent = str;
        var maxNumber = Number(str);
    })

    var elem = document.getElementById('inputText');
    elem.addEventListener('keyup',function(){
        var str = elem.value; 
        const selected = document.getElementById("selected").value;
        document.getElementById("limit").textContent = selected;
        var maxNumber = Number(selected);   
        
        //改行コード削除
        str = str.replace(/\r?\n/g,"");

        //文字数を出力
        var textCount = document.getElementById('textCount');
        textCount.innerText = str.length; 

        //残り文字数カウント
        var remainText = document.getElementById('remain');
        remainText.innerText = maxNumber - str.length; 

        var redText = document.getElementById('red')
        if(str.length <= maxNumber){
            redText.style.color = "black";
        } else {
            redText.style.color = "red";
        }

        //alertText
        var alertText = document.getElementById('alertText');
        if(str.length > maxNumber){
            alertText.innerText = "　*文字数が超過しています";
            alertText.style.color = "red";
        } else{
            alertText.innerText = "";
        }

        //fixボタン
            var output = document.getElementById('output');

            fixbtn.addEventListener('click', function(){
                output.innerText = "";
                if(str.length > maxNumber){ 
                    output.innerText = "文字数が超過しています。内容を確認しfixボタンを押してください";
                    output.style.color = "red";
                    output.style.backgroundColor ="lightgray";
                }else{
                    output.innerText = str;
                    output.style.color = "white";
                    output.style.backgroundColor ="rgb(124, 124, 124)";
            }
            })

        //clearボタン
           clearbtn.addEventListener('click', function(){
             output.innerText = "";
             elem.value = "";
           })
    })

    
})();