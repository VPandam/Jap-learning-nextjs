import styles from "../Styles/styles"

export default function LvlButton(props) {
    
    //Gives the last select button a different background and removes it from to the others
    //I didn't use focus because i wanted the selected button to remain clicked even when clicking on window
    
    const changeClassLvl = () => {
        let selectButtons = Array.from(document.getElementsByClassName('select-button'));
        let buttonClick = document.getElementById(props.id);

        selectButtons.forEach(buttonSelect => {
            if (buttonSelect.classList.contains('clicked')){

                buttonSelect.classList.toggle('clicked');
            }
        });

        buttonClick.classList.toggle('clicked')
    }

    
    return(
        <>
            <button className='select-button button' onClick = {() => 
            {
                props.click()
                changeClassLvl()
            }} id={props.id}> 
                {props.children} 
            </button>
            
            <style jsx>{styles}</style>
        </>
    )
} 