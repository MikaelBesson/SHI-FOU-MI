
let buttons = document.getElementsByTagName("button");
let historique = document.getElementById("historique");
let resultJoueur = 0;
let resultRobot = 0;

for(let i = 0; i <  buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        let joueur = buttons[i].innerHTML;
        let robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let affiche;

        if(joueur === robot){
            affiche = "Egalité";
            document.getElementById("resultat").style.backgroundColor = "chocolate";
            document.getElementById("resultat").style.border = "1px solid";
        }
        else if ((joueur === "pierre" && robot === "ciseaux") ||
                (joueur === "feuille" && robot === "pierre") ||
                (joueur === "ciseaux" && robot === "feuille")){
                affiche = "vous Gagné !!";
                document.getElementById("resultat").style.backgroundColor = "green";
                document.getElementById("resultat").style.border = "1px solid";
                resultJoueur ++;
        }
        else {
                affiche = "c'est Perdu !!";
                document.getElementById("resultat").style.backgroundColor = "crimson";
                document.getElementById("resultat").style.border = "1px solid";
                resultRobot ++;
        }
            document.getElementById("span").innerHTML = "joueur : " + joueur + " & " + "robot : " + robot;
            document.getElementById("resultat").innerHTML = affiche;
            document.getElementById("scoreJ").innerHTML = "score joueur : " + resultJoueur;
            document.getElementById("scoreR").innerHTML = "score robot : " + resultRobot;
            historique.innerHTML += document.createElement("p").innerHTML + "joueur : " + joueur + " & " + "robot : " + robot +"<br>";

    });

}


