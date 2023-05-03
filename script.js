let pre = document.querySelectorAll("pre");
for (let i = 0; i < pre.length; i++) {
    let icon = document.createElement("i");
    icon.classList.add("fa-regular", "fa-copy");
    icon.setAttribute("title", "copy");
    pre[i].appendChild(icon);
    let text = pre[i].querySelector("code").innerText;
    icon.addEventListener("click", () => {
        navigator.clipboard.writeText(text);
    });
}
