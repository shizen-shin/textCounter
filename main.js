(function(){
    'use strict';

    var elem = document.getElementById('inputText');
    elem.addEventListener('keyup',function(){
    //     console.log(elem.value);
    //     console.log(elem.value.length);
    
        var str = elem.value;    
        
        //改行コード削除
        str = str.replace(/\r?\n/g,"");

        //文字数を出力
        var textCount = document.getElementById('textCount');
        textCount.innerText = str.length; 

        //残り文字数カウント
        var maxText = document.getElementById('max').innerText;
        var remainText = document.getElementById('remain');
        remainText.innerText = maxText - str.length; 

        var redText = document.getElementById('red')
        if(str.length <= maxText){
            redText.style.color = "black";
        } else {
            redText.style.color = "red";
        }

        //alertText
        var alertText = document.getElementById('alertText');
        if(str.length > maxText){
            alertText.innerText = "　*文字数が超過しています";
            alertText.style.color = "red";
        } else{
            alertText.innerText = "";
        }

        //fixボタン
            var output = document.getElementById('output');

            fixbtn.addEventListener('click', function(){
                output.innerText = "";
                if(str.length > maxText){ 
                    output.innerText = "文字数が超過しています。内容を確認しfixボタンを押してください";
                    output.style.color = "red";
                }else{
                    output.innerText = str;
                    output.style.color = "black";
            }
            })

        //clearボタン
           clearbtn.addEventListener('click', function(){
             output.innerText = "";
             elem.value = "";
           })

           console.log(str);
    console.log(output.innerText);

    })

    
})();