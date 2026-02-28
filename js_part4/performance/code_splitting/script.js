document.querySelector("button").addEventListener("click", async function () {
    let data = await import("./test.js");
    console.log(data);
})