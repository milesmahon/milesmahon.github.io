const link = document.querySelector('#copy-click');
link.addEventListener('click', e => clickInteraction(e));
link.addEventListener('mouseover', e => e.target.classList.add("is-hovered"));
link.addEventListener('mouseleave', e => {
    if (!e.target.classList.contains("is-copied")) {
        e.target.classList.remove("is-hovered"); 
    }
});
link.addEventListener('keypress', e => {
if (e.keyCode === 13) clickInteraction(e);
});

const clickInteraction = (e) => {
    e.preventDefault();
    copyToClipboard(e.target);
    e.target.classList.add("is-copied");
    setTimeout(() => e.target.classList.remove("is-copied"), 1000);
    setTimeout(() => e.target.classList.remove("is-hovered"), 700);  
}

const copyToClipboard = str => {
    const el = document.createElement('input');
    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes 
    // -- gets data-copy-string attr
    str.dataset.copyString ? el.value = str.dataset.copyString : el.value = str.text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.opacity = 0;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}