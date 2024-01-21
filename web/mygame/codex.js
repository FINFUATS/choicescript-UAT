// How to open the Codex scene. Also the second half replaces my Codex button with the option to return to the game
function openCodex() {
    // Wait for game to stop loading.
    if (document.getElementById('loading')) return;
    var button = document.getElementById("codexButton");
    if (button && button.innerHTML == "Return") {
        return clearScreen(function () {
            setButtonTitles();
            loadAndRestoreGame();
        });
    }

    var scene = new Scene("codex", window.stats, this.nav, { secondaryMode: "codex", saveSlot: "temp", resume: true });
    
    scene.loadLines = function loadLines(str) {
        this.crc = crc32(str);
        this.lines = str.split(/\r?\n/);
        this.parseLabels();
        this.loaded = true;
        console.log(this.labels);
    };

    
    clearScreen(function () {
        setButtonTitles();
        var button = document.getElementById("codexButton");
        button.className = "codexButtonWords";
        button.innerHTML = "Return";
        scene.execute();
    }) 
}

// How to open the Codex scene. Also the second half replaces my Codex button with the option to return to the game
function openCodexTo(label_name) {
    // Wait for game to stop loading.
    if (document.getElementById('loading')) return;
    var button = document.getElementById("codexButton");
    if (button && button.innerHTML == "Return") {
        return clearScreen(function () {
            setButtonTitles();
            loadAndRestoreGame();
        });
    }

    var scene = new Scene("codex", window.stats, this.nav, { secondaryMode: "codex", saveSlot: "temp", resume: true });
    
    // This is fucking cursed...
    scene.loadLines = function loadLines(str) {
        this.crc = crc32(str);
        this.lines = str.split(/\r?\n/);
        this.parseLabels();
        this.loaded = true;
	this.goto(label_name.toLowerCase());
    };
    
    clearScreen(function () {
        setButtonTitles();
        var button = document.getElementById("codexButton");
        button.className = "codexButtonWords";
        button.innerHTML = "Return";
        scene.execute();
        
    })
}

