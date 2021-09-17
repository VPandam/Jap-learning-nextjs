import styles from "./Styles/styles"
import SelectButton from './SelectButton/index'

export default function CustomButton (props){
    
   

    if(props.select){
        return (
            <SelectButton click={props.click} id={props.id} className='select-button' > {props.children} </SelectButton>
        )

    }else{
        
        //Returns a button with the given classname + button, and an id
        return (
            <>
                <button className={`${props.button} button`} onClick={props.click} id={props.id}> {props.children} </button>
                <style jsx>{styles}</style>
            </>

        )
    }
    
}