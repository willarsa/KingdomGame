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

    const we2 = new WorldEvent("Pandemic", "A worldwide pandemic called the Pubonic Plague has struck. If you do not own a clinic, drink three full drinks.", "YES: Nothing Happens. NO: Man power decreases. Choose half of your infrastructures, those will not do anything for your next turn");
    prompts.push(we2);

    const we3 = new WorldEvent("Border Disputes", "Tensions rise along the borders of all the nations. Every nation wall sits.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we3);

    const we4 = new WorldEvent("Economic Meltdown", "The worldwide economy is crashing. Drink 5 full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we4);

    const we5 = new WorldEvent("Resource Collapse", "Non-renewable resources are running out. Everyone drinks three full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we5);

    const we6 = new WorldEvent("Blacksmith Shortages", "There are little dwarven blacksmiths to create armor and weapons for soldiers, as well as strengthening structures. All players drink 4 full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we6);

    const we7 = new WorldEvent("Trade Renaissance", "Trade blooms between all countries. Everyone drinks once to rejoice!", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we7);

    const we8 = new WorldEvent("Peace Summit", "All nations agree to a truce.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we8);

    const we9 = new WorldEvent("The Celestial Tournament", "Gods invite champions from every kingdom to compete. The chosen event must be agreed upon by all champions.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we9);

    const we10 = new WorldEvent("The Mana Collapse", "Magic around the world has stopped working. Drink four full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we10);

    const we11 = new WorldEvent("World Unity Festival", "A world unity festival occurs in all kingdoms. Do a little jig to celebrate.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we11);

    const we12 = new WorldEvent("Mass Water Cleansing Spell", "A world renowned and politically isolated wizard has cast a spell giving all the nations access to cleaner water.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we12);

    const we13 = new WorldEvent("Bountiful Harvests", "The soil seemed to be extra fertile this year.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we13);
    /*
    const we14 = new WorldEvent("Famine", "A world wide shortage of food has struck. Drink 3 full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we14);

    const we15 = new WorldEvent("Famine", "A world wide shortage of food has struck. Drink 3 full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we15);

    const we16 = new WorldEvent("Famine", "A world wide shortage of food has struck. Drink 3 full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we16);

    const we17 = new WorldEvent("Famine", "A world wide shortage of food has struck. Drink 3 full drinks.", "YES: Nothing happens NO: All crop related infrastructure yields nothing");
    prompts.push(we17);
    */

}