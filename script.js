var messageCount = document.getElementsByClassName('message').length;

document.getElementById('count').textContent = messageCount;

var allTrash = document.getElementsByClassName('trash');
var allMessages = document.getElementsByClassName('message');


function removeFunction(element) {
    element.parentNode.remove();
}

function refreshFunction() {
    messageCount = document.getElementsByClassName('message').length;
    document.getElementById('count').textContent =  messageCount;
}



if(messageCount > 1) {
    document.getElementById('msgtotal').textContent = "Messages totaux :";
   };
for(var i=0; i < document.getElementsByClassName("trash").length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click", function(){
        removeFunction(this);
        refreshFunction();

       if(messageCount <= 1) {
        document.getElementById('msgtotal').textContent = "Message total :";
       };
    });
}  


// CHALLENGES
// for(var i = 0; i < document.getElementsByClassName('message').length; i++ ) {
//     var descCount = document.getElementsByClassName('message')[i].firstElementChild.nextElementSibling.getElementsByTagName('p')[0].textContent.split(' ').length;
//     console.log(descCount);
// }

// for(var i = 0; i < document.getElementsByClassName('message').length; i++ ) {
//     var textDesc = document.getElementsByClassName('message')[i].firstElementChild.nextElementSibling.getElementsByTagName('p')[0].textContent
    
// }

var contacts = ['Adam Keval', 'Elise Watson', 'Alexandre Pozi', 'Zoe Millot']

document.getElementById('btn-add').addEventListener('click', function(){
    // console.log('clic détecté')
    // console.log(document.getElementById('addmessage').value)
    //Creation du bloc nouveau message
    var newdiv = document.getElementById('mainContent').appendChild(document.createElement('div'));
    newdiv.setAttribute('class', "row message");
    //Creation de l'image de profil
    var newavatar = newdiv.appendChild(document.createElement('img'));
    var avatarRandomizer = Math.floor(Math.random()*4 +1);
    newavatar.setAttribute('src', `avatar-${avatarRandomizer}.jpg`);
    newavatar.setAttribute('class', `avatar`);
    //Creation des éléments textes du nouveau message (destinataire et recupération du contenu)
    var newContainer =  newdiv.appendChild(document.createElement('div'));
    newContainer.setAttribute('class', 'content');
    newContainer.appendChild(document.createElement('h6'))
    newContainer.appendChild(document.createElement('p'))
    newContainer.lastElementChild.textContent = document.getElementById('addmessage').value
    newContainer.firstElementChild.textContent = contacts[avatarRandomizer - 1]
    //Ajout du bouton supprimer
    var newTrash = newdiv.appendChild(document.createElement('img'))
    newTrash.setAttribute('src', 'trash.png');
    newTrash.setAttribute('class', 'trash');

    //Mise à jour compteur message
    refreshFunction();

    //Rajout listener et delete sur trash
    newTrash.addEventListener("click", function(){
        removeFunction(this);
        refreshFunction();
    })
})  