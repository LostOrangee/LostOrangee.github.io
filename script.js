const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {

    const showreel =
        document.getElementById("showreel");

    window.scrollTo({

        top: showreel.offsetTop - 100,

        behavior: "smooth"

    });

});
