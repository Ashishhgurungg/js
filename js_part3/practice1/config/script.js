function createToaster(choice) {
    return (msg) => {
        let div = document.createElement("div");
        div.className = `${choice.theme == "dark" ? "bg-gray-500" : "bg-gray-100"} p-6 rounded-xl shadow-lg text-center`;
        div.textContent = msg;

        let parent = document.querySelector(".parent");
        parent.appendChild(div);

        if (config.x == 'left') {
            parent.className += "left-5";
        }
        if (config.y == 'top') {
            parent.className+= "top-5";
        }
         if (config.y == 'right') {
            parent.className+= "right-5";
        }
         if (config.y == 'bottom') {
            parent.className+= "bottom-5";
        }

        setTimeout(() => {
            parent.removeChild(div);
        }, choice.time * 1000);


    }
}

let config = {
    "theme": "light",
    "x": "left",
    "y": "top",
    "time": "3",
}

let toast = createToaster(config);
toast("toaster made");
setTimeout(() => {
    toast("task completed");
}, 2000);