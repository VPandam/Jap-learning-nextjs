import React, { useState, useEffect} from 'react';
import Link  from 'next/link';

import stylesJsx from '../styles/LvlSelect/styles'
import stylesButton from "../components/CustomButton/Styles/styles"

import CustomButton from '../components/CustomButton';

export default function LvlSelect(){
    const [type, setType] = useState("");
    const [lvl, setLvl ] = useState({});

    let id = 0;
    
    const setLvlE = (min, max, lvl) => {
        setLvl({minCard: min, maxCard: max, lvl: lvl})
    }
    
    //Adds opacity till the first container is invisible and calls change screen
    const choseLvl = () => {
        if (type !== ''){
            const typeContainer = document.getElementById('button-type-container');
            typeContainer.classList.add('disappear')
            const lvlContainer = document.getElementById('button-lvl-container');
            setTimeout(() => changeScreen(typeContainer, lvlContainer), 1000)
        }
    }

    //Change between first container and second container passed by parameter
    const changeScreen = (element, secondElement) => {
        element.classList.toggle('no-display');
        secondElement.classList.add('slide-in-left')
        secondElement.classList.toggle('no-display');
    }

    //If lvl is selected makes button link to game appear.
    //Executed everytime lvl is updated.
    useEffect(() => {
        if(lvl.maxCard || lvl.minCard){

            
            const buttonGame = document.getElementById('buttonGame')
            console.log(buttonGame)
            if(!buttonGame.classList.contains('slide-in-left')){
                buttonGame.classList.add('slide-in-left')
            }
            
            if(buttonGame.classList.contains('no-display')){
                buttonGame.classList.toggle('no-display');
            }
        }

    }, [lvl])
    
    return(
        <>
            <div className='lvlSelect'>
                <div className ='buttonTypeContainer slide-in-left' id='button-type-container'>
                    <div className='textContainerType'>
                        <h1>What do you want to practice?</h1>
                    </div>
                    <div className='buttonsTypeContainer'>
                        <CustomButton select={true} click={() =>setType("hiragana")} id={id}> Hiragana </CustomButton>
                        <CustomButton select={true} click={() =>setType("katakana")} id={++id}> Katakana </CustomButton>
                        <CustomButton select={true} click={() =>setType("all")} id={++id}> All </CustomButton>
                    </div>
                        
                    <CustomButton button='button-choselvl' click={choseLvl} id={++id}> Choose level </CustomButton>
                    
                </div> 

                
                {type&&
                  <>
                    <div className= 'buttonLvlContainer no-display' id='button-lvl-container'>
                        <div className='textLvlContainer'>
                            <h1>Choose a lvl or practice specific syllables</h1>
                        </div>
                        <div className='buttonsLvlContainer'>

                            
                            <CustomButton select={true} click={() => setLvlE(5, 14, undefined)} id={++id}> K* - S* </CustomButton>
                            <CustomButton select={true} click={() => setLvlE(15, 24, undefined)} id={++id}> T* - N* </CustomButton>
                            <CustomButton select={true} click={() => setLvlE(25, 34, undefined)} id={++id}> H* - M* </CustomButton>
                            <CustomButton select={true} click={() => setLvlE(35, 45, undefined)} id={++id}> Y* - R* - N </CustomButton>
                            <CustomButton select={true} click={() => setLvlE(0, 45, undefined)} id={++id}> ALL </CustomButton>
                        
                        </div>
                        
                    </div>
                
                    <div className=' button no-display gameButton' id='buttonGame'>
                           
                        <Link href={{
                            pathname: '/game',
                            query: {
                                type: type,
                                minCard: lvl.minCard,
                                maxCard: lvl.maxCard,
                                lvl: lvl.lvl,
                            }
                        }} passHref >
                            <a><label> GAME</label></a>
                        </Link>
                    </div>
                  </>    
                }
                
                

            </div>
            <style jsx>{stylesJsx}</style>
            <style jsx>{stylesButton}</style>
        </>
    )
}
