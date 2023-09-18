$(".signupContainerSwitch").on("click", () => {
    $(".signupContainer").toggleClass("showContainer");
    $(".loginContainer").toggleClass("showContainer");

    setTimeout(()=> {
        $("div.circleContainer").css(
            {"background-color":"white",
            "color":"black" }
        );
    
        $("div.circleContainer > p").html("Sign-Up");
    }, 500);
})

$(".loginContainerSwitch").on("click", () => {
    $(".signupContainer").toggleClass("showContainer");
    $(".loginContainer").toggleClass("showContainer");
    setTimeout(()=> {
        $("div.circleContainer").css(
            {"background-color":"black",
            "color":"white" }
        );

        $("div.circleContainer > p").html("Login");
    }, 500);
})