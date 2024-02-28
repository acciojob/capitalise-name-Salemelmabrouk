document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("input");
    input.addEventListener("blur", function() {
        this.value = this.value.toUpperCase();
    });
});