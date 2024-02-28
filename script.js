document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("fname");
    input.addEventListener("blur", function() {
        this.value = this.value.toUpperCase();
    });
});