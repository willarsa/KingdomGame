class WorldEvent {
    constructor(name, desc, outcome){
        this.name = name;
        this.desc = desc;
        this.outcome = outcome;
    }
}


let prompts = []

function newWorldEvent(){
    wename = document.getElementById('display-name');
    wedesc = document.getElementById('display-desc');
    weoutcome = document.getElementById('display-outcome');
    
    if(prompts.length === 0){
        alert("Reload the world events first!");
        return
    }
    
    var random = Math.floor(Math.random() * prompts.length)
    
    var toDisplay = prompts[random]

    wename.value = toDisplay.name;
    wedesc.value = toDisplay.desc;
    weoutcome.value = toDisplay.outcome;

    wename.size = wename.value.length > 0 ? wename.value.length : 10;
    wedesc.size = wedesc.value.length > 0 ? wedesc.value.length : 10;
    weoutcome.size = weoutcome.value.length > 0 ? weoutcome.value.length : 10;

    prompts.splice(random, 1)
}

function reloadWorldEvents(){
    wename = document.getElementById('display-name');
    wedesc = document.getElementById('display-desc');
    weoutcome = document.getElementById('display-outcome');

    wename.value = "";
    wedesc.value = "";
    weoutcome.value = "";

    prompts = []

    const we1 = new WorldEvent("Famine", "A world wide shortage of food has struck. Drink 3 full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we1);
}