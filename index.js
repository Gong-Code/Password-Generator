const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOne = document.querySelector("#passwordOne");
const passwordTwo = document.querySelector("#passwordTwo");
const generateBtnPassword = document.querySelector("#generate-btn");

console.log(generateBtnPassword);

let passwordLength = 14;

function generateCharacter() { 

    let randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    
    return randomCharacter;
}

// function generateRandomPassword() {

//     let randomPasswordOne = " ";
//     let randomPasswordTwo = " ";

//     for(let i = 0; i < passwordLength; i++) {
        
//         randomPasswordOne += generateCharacter();  
//         randomPasswordTwo += generateCharacter();                 
//     }

//     passwordOne.textContent = randomPasswordOne;  
//     passwordTwo.textContent = randomPasswordTwo;
// }


generateBtnPassword.addEventListener("click", () => {
    let randomPasswordOne = " ";
    let randomPasswordTwo = " ";

    for(let i = 0; i < passwordLength; i++) {
        
        randomPasswordOne += generateCharacter();  
        randomPasswordTwo += generateCharacter();                 
    }

    passwordOne.textContent = randomPasswordOne;  
    passwordTwo.textContent = randomPasswordTwo;
});









