$(function() {


    $("#paypal").on('click', function () {
        $("#creditcardform").hide();
        $('#paypalform').show();
        $('#alipayform').hide();
        $('#findpostcode').hide();
        $('#appendEnterAddress').hide();
        $('#enteraddressmanually').hide();
    });

    $("#creditcard").on('click', function () {
        $("#paypalform").hide();
        $('#creditcardform').show();
        $('#alipayform').hide();
        $('#findpostcode').hide();
        $('#appendEnterAddress').hide();
    });
    $("#alipay").on('click', function () {
        $("#paypalform").hide();
        $('#creditcardform').hide();
        $('#alipayform').show();
        $('#findpostcode').hide();
        $('#appendEnterAddress').hide();
        $('#enteraddressmanually').hide();
    });
    $("#addressbutton").on('click', function(){
        var postcode = document.getElementById("smallinput").value;
        if(postcode == "")  {
            window.alert("Please enter a postcode/zip first.");
            return false;
        }else{
            $("#appendFindAddress").show();
            $(this).off('click');
        }
    });

    $("#enteraddress").on('click', function() {
        $('#findpostcode').show();
        $("#enteraddressmanually").show();
    });

    $('#noaddress').on('click', function () {
        $('#findpostcode').hide();
        $('#appendEnterAddress').hide();
    });

    $('#submitorder').on('click', function() {
        if(document.getElementById("creditcard").checked) {
            var x = document.forms["myForm"]["cardnumber"].value;
            if (x == "") {
                window.alert("Fields must be filled out");
                return false;
            }
        }else if(document.getElementById("paypal").checked){
            return none;
        }else if(document.getElementById("alipay").checked) {
            return none;
        }else{
            window.alert("Select an payment option");
        }
        });
});

$(function () {
    $("#enteraddressmanually").one('click', function () {
        $("#appendEnterAddress").show();
        $(this).hide();
    });
});

$(function () {
   $('#alipaybutton').on('click', function () {
    $('#alipayform').hide();
   });
});