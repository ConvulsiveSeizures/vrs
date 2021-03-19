$(document).ready(() => {
    setTimeout(() => {
        $("#themeWrapper").addClass("changeTheme")
    }, 100)

    $("#closeContacts").on("click", () => {
        $("#contacts").removeClass("active")
    })

    $("#showContacts").on("click", () => {
        $("#contacts").addClass("active")
    })
})