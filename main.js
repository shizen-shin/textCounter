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
        if(str.length <= 10){
            redText.style.color = "black";
        } else {
            redText.style.color = "red";
        }

        //alert
        if(str.length > maxText){
            var alert = document.getElementById('alert');
            alert.innerText = "　*文字数が超過しています";
            alert.style.color = "red";
        }


    })

})();