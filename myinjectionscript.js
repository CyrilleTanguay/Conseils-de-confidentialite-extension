var elem = document.createElement("div");
var cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
