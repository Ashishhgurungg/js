let form = document.querySelector("form");
let userName = document.querySelector("#name");
let age = document.querySelector("#age");
let image = document.querySelector("#image");

let userLogger = {
    users: [],
    addUsers: function () {
        //we don't want to make the value of this to be the form so we can choose any three.
        form.addEventListener("submit", this.submitForm.bind(this));//bind will save the object as this because here value of this is object
        // form.addEventListener("submit", this.submitForm.bind(userLogger));// we can pass and bind the object by guving object name
        // form.addEventListener("submit", () => {
        //     this.submitForm();
        // });// or we can use arrow function because arrow function takes the value of thsi from parent
    },  
    submitForm: function (e)  {
        e.preventDefault();
        // pass the users value in the users array , we will pass a obj in array
        this.users.push({
            userName: userName.value,
            age: age.value,
            image: image.value,
        })
        form.reset();
        this.renderUi();

    },
    renderUi: function () {

        document.querySelector(".parent").innerHTML = "";
        this.users.forEach(element => {
            let card = document.createElement("div");

            let name = document.createElement("h2");
            name.textContent = element.userName;
            card.appendChild(name);

            let userAge = document.createElement("h2");
            userAge.textContent = element.age;
            card.appendChild(userAge);

            let imageLink = document.createElement("img");
            imageLink.src = element.image;
            card.appendChild(imageLink);

            document.querySelector(".parent").appendChild(card);


        });
    }

}

userLogger.addUsers();

