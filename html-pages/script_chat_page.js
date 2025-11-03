//Translate Button
const transl = document.getElementById("translate");
//Navlink button
const user_nav = document.getElementById("user");
const price = document.getElementById("price");
const about = document.getElementById("about");
const title = document.querySelector(".title");
//Contacts for users
const users = document.querySelectorAll(".user");

//Receiver info
const receiver_Image = document.querySelector("[data-receiver]");
const receiver_Name = document.querySelector(".username_receiver");

//Submit button
const submit_btn = document.getElementById("send_button");
//Input placeholder
const text_input = document.querySelector(".text_input");

//Virtual Keyboard container
const keyboard = document.getElementById("virtual_keyboard");

//Stylling translate button
transl.style.backgroundColor = "black";
transl.style.color = "white";
transl.style.padding = "7px 10px";
transl.style.border = "2px solid white";
transl.style.borderRadius = "10px";



//Translation button function
transl.addEventListener("click", () => {
    const cur = transl.textContent.trim().toLowerCase();
    transl.textContent = cur.includes('english') ? 'French' : 'English';
    if (transl.textContent == "English") {
        user_nav.textContent = "Utillisateur";
        price.textContent = "Prix";
        about.textContent = "A propos";
        title.textContent = "Tes Links";
        title.style.fontStyle = "italic";
        submit_btn.textContent = "Envoyer";
        text_input.placeholder = "Tapez votre message ici...";
    }
    else {
        users.textContent = "User";
        price.textContent = "Price";
        about.textContent = "About";
        title.textContent = "Your Links";
        submit_btn.textContent = "Send";
        text_input.placeholder = "Type your message here...";
    }


});
//Hover
transl.addEventListener("mouseenter", () => {
    transl.style.backgroundColor = "white";
    transl.style.color = "black";
    transl.style.cursor = "pointer";
    transl.style.border = "2px solid white";
    transl.style.padding = "16px";
});
transl.addEventListener("mouseleave", () => {
    transl.style.backgroundColor = "black";
    transl.style.color = "white";
    transl.style.border = "2px solid white";
    transl.style.padding = "7px 10px";
});

//User selection
users.forEach(user => {
    user.addEventListener("click", () => {
        const img = user.querySelector(".user-profile-picture").src;
        const name = user.querySelector(".username").textContent;

        receiver_Image.src = img;
        receiver_Name.textContent = name;
    })
});

const keys = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",
    "Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
    "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift",
    "Ctrl", "Fn", "Windows", "Alt", "Space", "Alt", "Menu", "Ctrl",
    "Left", "Up", "Down", "Right"
];

// Create virtual keyboard
keys.forEach(key => {
    //Creates button
    const keyElement = document.createElement("button");
    //Adds button text of what the key is
    keyElement.textContent = key;
    //Adds class to each key
    keyElement.classList.add("key_element");
    //Appends each key to the keyboard container
    keyboard.append(keyElement);
    keyElement.style.backgroundColor = "black";
    keyElement.style.color = "white";
    keyElement.style.margin = "3px";
    keyElement.style.padding = "8px";
});
//Keyboard styling
keyboard.style.display = "grid";
keyboard.style.gridTemplateColumns = "repeat(16, auto)";
keyboard.style.gridTemplateRows = "auto";
keyboard.style.justifyContent = "center";
keyboard.style.marginTop = "10px";
keyboard.style.flexDirection = "column";
//Input field stylying
const text_input_container = document.getElementById("text_input_container");
text_input_container.style.display = "flex";
text_input_container.style.justifyContent = "center";
text_input_container.style.alignItems = "center";
text_input_container.style.flexDirection = "column";
text_input_container.style.margin = "auto";
