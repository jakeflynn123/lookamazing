$(function() {

    //when paypal is clicked
    $("#paypal").on('click', function () {
        //hide the other forms and show the paypal form
        $("#creditcardform").hide();
        $('#paypalform').show();
        $('#alipayform').hide();
    });

    //when creditcard is clicked
    $("#creditcard").on('click', function () {
        //hide the other forms and show the creditcard form
        $("#paypalform").hide();
        $('#creditcardform').show();
        $('#alipayform').hide();

    });

    //when the alipay form is clicked
    $("#alipay").on('click', function () {
        //hide the other forms and show the alipay form
        $("#paypalform").hide();
        $('#creditcardform').hide();
        $('#alipayform').show();
    });

    //when the find address button is clicked
    $("#addressbutton").on('click', function(){
        //stored the smallinput id
        var postcode = document.getElementById("smallinput").value;
        //and if that equals null
        if(postcode == "")  {
            //then display alert saying please enter a postcode
            window.alert("Please enter a postcode/zip first.");
            return false;
        }else{
            //if not then show the addresses linked to that postcode
            $("#appendFindAddress").show();
            $(this).off('click');
        }
    });


    //when use a different address is clicked
    $("#enteraddress").on('click', function() {
        //show the find postcode form and hide the address already inputted
        $('#findpostcode').show();
        $("#enteraddressmanually").show();
        $("#address").hide();
    });
    //when use the same address is clicked then hide the postcode form and show address again
    $('#noaddress').on('click', function () {
        $('#findpostcode').hide();
        $('#appendEnterAddress').hide();
        $('#address').show();
    });

    //when the submit order button is clicked
    $('#submitorder').on('click', function() {
        //if the creditcard button is checked
        if(document.getElementById("creditcard").checked) {
            //then loop over the fields for the creditcard
            var x = [document.forms["paymentform"]["cardnumber"].value, document.forms["paymentform"]["cv2"].value, document.forms["paymentform"]["expirydate"].value, document.forms["paymentform"]["nameoncard"].value];
            for (var i = 0; i < x.length; i++) {
                //and if they all equal null
                if (x[i] == "") {
                    //then display a message asking the user to fill them in
                    window.alert("Please Enter Your Credit Card Details");
                    return false;
                }
            }
            //if not then check if paypal is checked
        } else if (document.getElementById("paypal").checked) {
            //then run the addresscheck function
            return addressCheck();
            //if not then check if alipay is checked
        } else if (document.getElementById("alipay").checked) {
            //then run the addresscheck function
            return addressCheck();
        } else {
            //if none are checked then alert 'select an payment option'
            window.alert("Select an payment option");
        }
    });
});


function addressCheck() {
    //check if use a different address is checked
    if(document.getElementById("enteraddress").checked) {
        //check if the postcode field is filled in
        var postcode = document.forms["postcode"]["postcode"].value;
        if (postcode = "") {
            //if it is not filled in then display an alert telling the user to fill it in
            window.alert("Please Enter a Postcode/ZipCode");
        }
    }else{
        //if not then display an alert telling them the order is complete
        window.alert("Thank you! your order is complete, payment shall follow shortly")
    }
}
$(function () {
    //when enter the address manually is clicked
    $("#enteraddressmanually").one('click', function () {
        //show enter a new address form and hide this button
        $("#appendEnterAddress").show();
        $(this).hide();
        $('#addressbutton').hide();
    });
});

//when the save address button is clicked
$('#saveaddress').on('click', function() {
    //then loop over the address fields
    var addressfields = [document.forms["address"]["housenumber"].value, document.forms["postcode"]["postcode"].value,
        document.forms["address"]["addressone"].value, document.forms["address"]["TownCity"].value];
    for (var i = 0; i < addressfields.length; i++) {
        //if they are all empty
        if (addressfields[i] == "") {
            //display an alert telling them it needs to be filled in
            window.alert("Please Enter Your Address or Select Use The Same Address");
            return false;
        } else {
            //if not then change how the save button looks
            $("#saved").show();
            $("#save").hide();
            $("#saveaddress").css('background-color', '#28bdb3');
            $("#saveaddress").css('color', 'white');
        }
    }
});