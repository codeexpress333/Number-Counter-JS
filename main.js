const counterBtn = document.querySelectorAll('.counterBtn');
let count = 0;

counterBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('prevBtn')) {
            count--;
        } else if (btn.classList.contains('nextBtn')) {
            count++;
        }


        //Now Show Value
        const counter = document.querySelector('.counter');
        counter.innerText = count;

    });
});