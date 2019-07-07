var colors_ar = ["red", "green", "yellow", "blue"];
var shuffle_ar = [];
var check = true;
var num = 0;
$(function () {
    declareBtns();
})
function declareBtns() {
    $("#start").on("click", function () {
        if (check == true) {
            check = false;
            for (var i = 0; i < colors_ar.length; i++) {
                shuffle_ar = shuffle(colors_ar);
            }
            var scale_big = setInterval(function () {
                var colorcheck = shuffle_ar[num];
                $(`#${colorcheck}`).animate({ opacity: '0.4' }, 500);
                num++;
                setTimeout(function () {
                    $(`#${colorcheck}`).animate({ opacity: '1' }, 500);
                }, 1000);
                if (num == shuffle_ar.length) {
                    clearInterval(scale_big);
                    usercheck();
                    num = 0;
                }
            }, 1000);
        }
    }
    )
}

function usercheck() {
    var counter = 0;
    var checkcolor_ar = [];
    if (check == false) {
        $(".box").click(function () {
            var colorid = $(this).data("color");
            $(this).animate({ opacity: '0.4' }, 100);
            $(this).animate({ opacity: '1' }, 100);
            checkcolor_ar.push(colorid);
            if (checkcolor_ar.length < shuffle_ar.length) {
                if (checkcolor_ar[counter] != shuffle_ar[counter]) {
                    $("#status").html("loser!!");
                    $("#status").css("background-color", "rgb(221, 44, 0)")
                    check = true;
                    shuffle_ar = [];
                    $(".box").off("click");
                } else {
                    counter++;
                }
            } else if (checkcolor_ar.length == shuffle_ar.length) {
                if (checkcolor_ar[counter] != shuffle_ar[counter]) {
                    $("#status").html("loser!!");
                    $("#status").css("background-color", "rgb(221, 44, 0)");
                    check = true;
                    shuffle_ar = [];
                    $(".box").off("click");
                } else {
                    $("#status").html("well done!!");
                    $("#status").css("background-color", "rgb(6, 243, 25)");
                    check = true;
                    shuffle_ar = [];
                    $(".box").off("click");
                }
            }


        })
    }
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}