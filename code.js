let items = [
    'am a student at University of Maryland',
    'live in College Park, MD',
    'love to code',
    'love to play video games',
    'was a TA for CMSC335 (Web Dev)',
    'was a TA for CMSC470 (Natural Language Processing)',
    'know Python',
    'know Java',
    'know JavaScript',
    'know LISP',
    'am passionate about Natural Language Processing',
    'good at problem solving',
    'love to learn new things',
    'love to travel',
    'work under Dr. Denis Peskov',
    'will be a grad student',
    'love to read',
    'am a movie enthusiast',
    'cook a lot',
    'am a coke ambassador',
    'watch soccer',
    'am a huge fan of Inter Milan',
    'love my macbook',
    'love my Windows PC',
    'wish I can get a Raspberry Pi',
    'stay hydrated',
    'am a dog person',
    'have access to a supercomputer',
    'often contribute to open source projects',
    'love Daniel Day-Lewis\' movies',
    'enjoy classical music',
    'enjoy rock music',
    'do prompt engineering',
    'work under Prof. Jordan Boyd-Graber',
    'am left-handed',
    'love my car',
    'am an introvert',
    'don\'t like iPhone',
    'am always an Android user',
    'like sushi',
    'am crazy about ramen',
    'don\'t like Marvel movies',
    'play Apex Legends',
    'am very picky about electronics',
    'have more skincare products than I wish to admit',
    'drink tea',
    'do pour-over coffee',
    'code for fun',
    'am a CS major',
    'am a LING major',
    'love cyberpunk',
    'love retro futurism',

]

let timespan = 3000;

var used = {}
var element

document.addEventListener("DOMContentLoaded", function () {
    element = document.getElementById("info")

    for (var statement of items) {
        used[statement] = false
    }

    randomInfo()
    setInterval(randomInfo, timespan)
})

function resetUsed() {
    for (var statement in used) {
        used[statement] = false
    }
}

function randomInfo() {
    var usedAmount = 0
    for (var statement in used) {
        if (used[statement]) {
            usedAmount++
        }
    }
    if (usedAmount == items.length) {
        resetUsed()
    }

    var replace = random()
    while (used[replace]) {
        replace = random()
    }

    element.innerHTML = replace
    used[replace] = true
}

function random() {
    return items[Math.floor(Math.random() * items.length)]
}