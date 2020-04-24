console.log("on clickListener.js");
document.addEventListener("click", () => {
    var a = 100;
    alert("clicked");
    func();
});

function func() {
    var b = 200;
    console.log("inside func");
}