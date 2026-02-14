const defaultErrorMessage = "Sorry, there was a problem submitting your form.";

[...document.querySelectorAll("form")].map(form => {
  const responseText = form.querySelector(".response-text") as HTMLParagraphElement;

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const response = await fetch(form.action, {
      headers: {
        Accept: "application/json"
      },
      method: form.method,
      body: new FormData(form)
    });

    if (response.ok) {
      responseText.textContent = form.dataset.responseText || "Thank you for submitting your information. We will get back to you as soon as possible.";
      form.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          responseText.textContent = data["errors"].map((error: { message: string }) => error["message"]).join(", ");
        } else {
          responseText.textContent = defaultErrorMessage;
        }
      });
    }

    responseText.scrollIntoView(false);
  });
});
