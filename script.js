let firstNumber, action, secondNumber, res, resText, array = [], clearRes;

    $(".num").click( function (){
        let numText = $(this).html();
        resText = $('#result').val();
        resText += numText;
        resText.startsWith('0' ) ?  resText = resText.substring(1) : '';
        $('#result').val(resText);
        array = [];
        for (let i = 0; i < resText.length; i++){
            array.push(resText[i]);
        }
    });

    $('.dot').click( function (){ // add disabled to dot
        $('.dot').attr("disabled", true);
    });

    $('.clear').click(function (){ // clear all
        $('#result').val("");
        firstNumber = "";
        secondNumber = "";
        $('#result').val("0");
    });

    $('.back').click( function (){ // for back function <-
        array.pop();
        clearRes = array.join("");
        $('#result').val("");
        $('#result').val(clearRes);
    });

    $('.minus').click( function (){ // for minus
        let minus = $('.minus').html();

        resText.includes("-") ? resText = resText.substring(1) : resText  = minus + resText;
        $('#result').val(resText);

    });

    $('.action').click( function (){ // for  + - / *
        firstNumber = Number($('#result').val());
        action = $(this).html();
        $('#result').val("");
        $('.dot').removeAttr("disabled");
        $('#result').attr('placeholder', action);
    });

    $('.equal').click( function (){ // for  equal (=)
       secondNumber =  Number($('#result').val());
       if (action === "+"){
          res = firstNumber + secondNumber
       }else if(action === "-"){
           res = firstNumber - secondNumber
       }else if(action === "/"){
           res = firstNumber / secondNumber
       }else if(action === "*"){
           res = firstNumber * secondNumber
       }
        $('#result').val(res);
    });