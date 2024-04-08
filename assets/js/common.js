document.addEventListener("click", (event) =>
{
    if ((event.target instanceof HTMLElement) && event.target.classList.contains("navbar-burger") && event.target.dataset.target)
    {
        event.target.classList.toggle("is-active");
        document.getElementById(event.target.dataset.target)?.classList.toggle("is-active");
    }
});
