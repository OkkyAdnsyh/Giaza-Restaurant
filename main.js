const dropdownControl = document.querySelectorAll('.dropdown--control');
const dropdownContent = document.querySelectorAll('.dropdown--content');

console.log(dropdownControl)

dropdownControl.forEach(control => 
    control.addEventListener('click',(e) => {
        for(let i = 0 ; i < dropdownControl.length ; i++){
            dropdownControl[i].classList.remove('active')
            dropdownContent[i].classList.remove('active')
        }

        control.classList.add('active')
        document.querySelector(`${control.dataset.target}`).classList.add('active')
    })
    )