
function mostraSezione(sezioneId) {
    var sezioneCorrente = document.getElementById(sezioneId);

    window.scrollTo({
        top: sezioneCorrente.offsetTop,
        behavior: 'smooth'
    });
}
function infograficaSwitch() {
    let scroll_v = element.scrollTop;
    if (scroll_v > 100) console.log('lol');
}