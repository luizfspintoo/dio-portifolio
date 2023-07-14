const acordeonTrigguers = document.querySelectorAll(".acordeon .trigger-button");

acordeonTrigguers.forEach((trigguer) =>{
    trigguer.addEventListener("click", (e) => {
        const acordeon = trigguer.parentElement
        const isOpen = acordeon.classList.contains("open");

        if(!isOpen) {
            acordeon.classList.add("open");
        } else {
            acordeon.classList.remove("open");
        }
    })
})