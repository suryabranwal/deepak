    document.getElementsByClassName("watch")[0].style.height = document.body.scrollHeight + "px";
    document.getElementsByClassName("container")[0].style.height = document.body.scrollHeight + "px";
    setInterval(function () {
        var date = new Date;
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        $(".time").eq(0).text(Math.floor(hr / 10));
        $(".time").eq(1).text(hr % 10);
        $(".time").eq(2).text(Math.floor(min / 10));
        $(".time").eq(3).text(min % 10);
        $(".time").eq(4).text(Math.floor(sec / 10));
        $(".time").eq(5).text(sec % 10);
        if (hr === 00) {
            $(".watch").css("display", "none");
            $(".wish").css("display", "block");
        }
    }, 1000);
    $("#gift").on("click", function () {
        $("#msg").css("opacity", 1);

    });
