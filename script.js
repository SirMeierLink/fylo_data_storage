const input_range = document.querySelector('input[type=range]');
const storage_amt = document.querySelector('.storage-amount');
const storage_used = document.querySelector('.storage-size');



input_range.oninput = function() {
    storage_amt.textContent = `${1000 - input_range.value}`;
    storage_used.textContent = this.value;
};

input_range.addEventListener('mousemove', function() {
    let color_changer = `
    linear-gradient(
        90deg,hsl(6, 100%, 80%), hsl(335, 100%, 65%), 
        var(--very-dark-blue) ${((input_range.value / 10) + 1)}%
        )
    `;
    input_range.style.background = color_changer;
});

