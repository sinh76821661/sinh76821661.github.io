document.querySelectorAll(".lang a").forEach(a => {
    let lang;
    switch (a.textContent) {
        case "English":
            lang = "en";
            break;

        case "日本語":
            lang = "";
            break;
    }
    a.href = "/Nihilicm-1/" + lang;
});
document.querySelectorAll("span[class='sx']").forEach(span => span.textContent = span.textContent.replace("|hear|", location.href));