const postForm = document.querySelector('#user-name');
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector("#user-email");
const errorDisplay = document.querySelector('#error-message');


async function loadUser(params) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) {
            throw new Error("User not found");
            
        }

        const data = await response.json();

        userName.textContent = data.name;
        userEmail.textContent = data.email;
    } catch (error) {
        errorDisplay.textContent = "Failed to load user";
    }
}

postForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const titleInput = document.querySelector('#post-title').value;
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: titleInput,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.status === 201) {
            alert("Post uploaded successfully!");
            postForm.reset(); // Clear the form
        }
    } catch (error) {
        console.error("Post failed", err);
    }
})

loadUser();