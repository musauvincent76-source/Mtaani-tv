let tvVideo = null;

function initPresenter() {
    tvVideo = document.querySelector('video') || document.getElementById('tvVideo');
}

function speakMtaani(text) {
    initPresenter();
    // 1. Simamisha TV
    if(tvVideo) tvVideo.pause();
    
    // 2. Show presenter
    let presenter = document.getElementById('presenter');
    if(!presenter){
        presenter = document.createElement('img');
        presenter.id = 'presenter';
        presenter.src = 'mtaani_presenter.jpg';
        presenter.style.cssText = 'display:block;position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:9999;background:black;';
        document.body.appendChild(presenter);
    } else {
        presenter.style.display = 'block';
    }

    // 3. Sema
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'sw-KE';
    utter.rate = 0.9;
    speechSynthesis.speak(utter);

    // 4. Ukimaliza, rudisha video
    utter.onend = function() {
        presenter.style.display = 'none';
        if(tvVideo) tvVideo.play();
    };
}
