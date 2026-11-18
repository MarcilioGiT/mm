const toast = document.querySelector(".toast");

const serverLinks = document.querySelectorAll("[data-server]");

serverLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (href.startsWith("#season-")) {
      event.preventDefault();

      toast.textContent =
        `${link.dataset.server} selecionado — configure o link real no index.html.`;

      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 4000);
    }
  });
});
