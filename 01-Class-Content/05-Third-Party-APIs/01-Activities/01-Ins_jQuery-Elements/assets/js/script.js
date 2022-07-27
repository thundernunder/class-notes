// jQuery helps reduce the amount of code we have to use in javascript
// jQuery is fitted to work with as many browsers as possible

// var rootEl = document.getElementById("root");
var rootEl = $('#root');

// document.creatElement("h1");
var titleEl = $("<h1>");

// titleE1.textContent = "Hello Friends";
titleEl.text('Hello Friends');

// add class
titleEl.attr("class", "fancy");

// also add class
titleEl.addCass('p-5');

// add CSS
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

// append
rootEl.append(titleEl);

rootEl.append('<h2> with jQuery we can: </h2>');

var abilities = [
    'Select', 
    'Create', 
    'Animate', 
    'Traverse',
    'Event Listen',
    'Much More'
]

for (var i = 0; i < abilities.length; i++) {
    var abilitiesEl = $('<li>');

    abilityEl.text(abilities[i]);

    abilityEl.addClass('my-3');

    rootEl.append(abilityEl);
}



