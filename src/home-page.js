import myImage from "./myImage.png";

function makeHomePage(){
    const container = document.getElementById("content");

    const header = document.createElement("h1");

    header.textContent = "The best restaurant since 'The Lotus Restaurant'";

    container.appendChild(header);

    const description_one = document.createElement("p");
    description_one.textContent = "Aliquip veniam duis cillum amet aliquip officia ex irure id. Officia esse aliqua aute voluptate cillum. In aliquip laborum duis dolor qui aliquip est cupidatat ullamco. Mollit tempor Lorem quis laborum eu laborum eu laborum. Eiusmod Lorem sunt aliquip sit. Esse proident do laborum ex excepteur laborum qui ex reprehenderit cillum ea. Deserunt anim cupidatat qui nulla irure fugiat veniam consectetur."

    container.appendChild(description_one);

    const lotus_img = new Image();


    lotus_img.src = myImage;
    lotus_img.width = "100";

    lotus_img.classList.add("only_img");
    
    container.appendChild(lotus_img);

}

export { makeHomePage };