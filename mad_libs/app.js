let words = {
    number: "",
    adjective: "",
    pluraNoun: "",
    adverb: "",
    anotherAdjective: ""
};

function startMadlib() {
    words.number = prompt("Enter a number:");
    words.adjective = prompt("Enter an adjective:");
    words.pluraNoun = prompt("Enter a plural noun:");
    words.adverb = prompt("Enter an adverb:");
    words.anotherAdjective = prompt("Enter another adjective:");

console.log("Collected words:", words);

    const madlibStory = `Once upon a time a group of ${words.number} General Assembly graduates
    got together and made a startup called ${words.adjective} Technologies.
    Their goal was to create smart ${words.pluralNoun}.
    They approached the challenge ${words.adverb}
    which ultimately lead them to ${words.anotherAdjective} fame.`;
    
console.log("Madli Story", madlibStory)

alert("Tech Startup Madlib Story: /n/n" + madlibStory);
}

startMadlib()