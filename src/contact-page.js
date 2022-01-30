function makeContactPage() {
    const content = document.getElementById("content");
    
    const header = document.createElement("h1");

    header.textContent = "The best restaurant since 'The Lotus Restaurant'";
    content.appendChild(header);


    const contact_info = document.createElement("div");

    contact_info.innerHTML = "<p>Esse excepteur occaecat tempor est laboris non. Velit occaecat enim exercitation pariatur sunt quis sit culpa ipsum sint. Ipsum ex excepteur veniam anim dolor aute. Incididunt dolore ex nulla ullamco cupidatat in aliquip sint aliqua.</p><br /> And that's why we expect you to contact us whenever you want. <br /> <br /> You can contact us to the email: loremonkey@lorembonobo.com <br /> <br />Or the phone: <br />+789 932 821 810";

    content.appendChild(contact_info);
    
}

export { makeContactPage };