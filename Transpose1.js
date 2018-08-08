    function transposechord() {

        if ($.trim($("textarea#textmasuk").val()) != "") {
            var haha = $("textarea#textmasuk").val();
        }

        var str2 = "<pre data-key='C' id='copythis'>";
        var str3 = "</pre>";

        var res = str2 + haha + str3;

        document.getElementById("demochordkuy").innerHTML = res;
        $("pre").transpose();
    }
