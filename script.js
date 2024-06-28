document.addEventListener("mousemove", function (details) {
    document.querySelectorAll(".slide").forEach((elem) => {
        var x = (window.innerWidth - details.clientX * 15) / 50;

        elem.style.transform = `translateX(${-x}px)`
    });
});