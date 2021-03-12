const link = document.querySelector('#snow-sandbox');
link.addEventListener('click', e => clickInteraction(e));
link.addEventListener('keypress', e => {
    if (e.keyCode === 13) clickInteraction(e);
});

const clickInteraction = (e) => {
    console.log("It's snowing :)");
    e.preventDefault();
    document.body.classList.add("is-snowing");
    setTimeout(() => document.body.classList.remove("is-snowing"), 5000);
}