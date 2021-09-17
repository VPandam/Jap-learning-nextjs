
export default function toggleIncorrect(inputBox){
    
    inputBox.value = '';
    inputBox.classList.toggle('incorrect');

    setTimeout(() => {
        inputBox.classList.toggle('incorrect');
    }, 400)
}