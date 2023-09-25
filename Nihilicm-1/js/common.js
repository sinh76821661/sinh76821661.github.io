document.head.innerHTML += `
<link rel="stylesheet" href="https://sinh76821661.github.io/Nihilicm-1/css/style.css"/>
<link rel="icon" type="image/svg+xml" href="https://sinh76821661.github.io/assets/images/NC-1.svg">
<link rel="apple-touch-icon" href="https://sinh76821661.github.io/assets/images/NC-1.svg">`;
addEventListener("load", () => {
    document.querySelectorAll(".lang a").forEach(a => {
        let lang;
        switch (a.textContent) {
            case "English":
                lang = "en";
                break;

            case "日本語":
                lang = "";
                break;
            
            default:
                return;
        }
        const pathname = location.pathname;
        a.href = pathname.substring(0, pathname.lastIndexOf("/") + 1) + lang;
    });
    document.querySelectorAll("span[class='sx']").forEach(span => span.textContent = span.textContent.replace("|hear|", location.href));
});