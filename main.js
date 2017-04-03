$(function() {


    $("#paypal").on('click', function () {
        $("#creditcardform").hide();
        $('#paypalform').show();
        $('#alipayform').hide();
    });

    $("#creditcard").on('click', function () {
        $("#paypalform").hide();
        $('#creditcardform').show();
        $('#alipayform').hide();

    });
    $("#alipay").on('click', function () {
        $("#paypalform").hide();
        $('#creditcardform').hide();
        $('#alipayform').show();
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
        $("#address").hide();
    });

    $('#noaddress').on('click', function () {
        $('#findpostcode').hide();
        $('#appendEnterAddress').hide();
    });

    $('#submitorder').on('click', function() {
        if(document.getElementById("creditcard").checked) {
            var x = [document.forms["paymentform"]["cardnumber"].value, document.forms["paymentform"]["cv2"].value, document.forms["paymentform"]["expirydate"].value, document.forms["paymentform"]["nameoncard"].value];
            for (var i = 0; i < x.length; i++) {
                if (x[i] == "") {
                    window.alert("Please Enter Your Credit Card Details");
                    return false;
                }
            }
            } else if (document.getElementById("paypal").checked) {
                return addressCheck();
            } else if (document.getElementById("alipay").checked) {
                return addressCheck();
            } else {
                window.alert("Select an payment option");
            }

    });
});
function addressCheck() {
    if(document.getElementById("enteraddress").checked) {
        var postcode = document.forms["postcode"]["postcode"].value;
        if (postcode = "") {
            window.alert("Please Enter a Postcode/ZipCode");
        }
    }else{
        window.alert("Thank you! your order is complete, payment shall follow shortly")
    }
}
$(function () {
    $("#enteraddressmanually").one('click', function () {
        $("#appendEnterAddress").show();
        $(this).hide();
        $('#addressbutton').hide();
    });
});

$(function () {
   $('#alipaybutton').on('click', function () {
    $('#alipayform').hide();
   });
});

$('#saveaddress').on('click', function() {
    var o = [document.forms["address"]["housenumber"].value, document.forms["postcode"]["postcode"].value,
        document.forms["address"]["addressone"].value, document.forms["address"]["TownCity"].value];
    for (var h = 0; h < o.length; h++) {
        if (o[h] == "") {
            window.alert("Please Enter Your Address or Select Use The Same Address");
            return false;
        } else {
            $("#saved").show();
            $("#save").hide();
            $("#saveaddress").css('background-color', '#28bdb3');
            $("#saveaddress").css('color', 'white');
        }
    }
});