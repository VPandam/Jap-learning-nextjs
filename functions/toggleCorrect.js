
export default function toggleCorrect (inputBox) {
    
    inputBox.classList.toggle('correct');
    
    setTimeout(() => {
        inputBox.classList.toggle('correct');
    }, 400)
}