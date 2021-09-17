import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import  Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Game/styles'

import CustomButton from '../../components/CustomButton/index';
import Card from '../../components/Card/Index'

import nextPhoto from '../../functions/nextPhoto';
import getPhotoCode from '../../functions/getPhotoCode.js';
import toggleCorrect from '../../functions/toggleCorrect';
import toggleIncorrect from '../../functions/toggleIncorrect';

import backArrow from '../../public/arrow.png'
import {cardListLvlConst, cardSyllableConst} from '../../constants/lists' 





export default function Game (){

    const cardList = cardSyllableConst;

    const cardListLvl = cardListLvlConst;

    const router = useRouter();
    const [actualCard, setActualCard] = useState(undefined);
    const [userInput, setUserInput] = useState('');
    const [photoCode, setPhotoCode] = useState('');
    const [gameInfo, setGameInfo] = useState({type: router.query.type, lvl:  router.query.lvl, 
        minCard: parseInt(router.query.minCard), maxCard:parseInt(router.query.maxCard)});
    const [gameScore, setGameScore] = useState({totalTries: 0, totalSuccess: 0, totalFails: 0});

    let syllable = cardList[actualCard]


    useEffect(() => {
        
        setGameInfo({type: router.query.type, lvl:  router.query.lvl, 
            minCard: parseInt(router.query.minCard), maxCard:parseInt(router.query.maxCard)})
            
        if(!gameInfo.maxCard || !gameInfo.type){
            router.push("/")
        }

        nextPhoto(gameInfo, setActualCard);

    }, [])
    useEffect (() => {
        if (actualCard != undefined){
            let code = getPhotoCode(actualCard, gameInfo.type);
            setPhotoCode(code)
            
            document.getElementById('input-text-box').value = '';
        }
    }, [actualCard])
        
    const handleChange = e => {
        
        setUserInput(e.target.value.toLowerCase())

    }

    const handleSubmit = (ev) => {
        
        ev.preventDefault();
        const inputBox = document.getElementById("input-text-box")
        const submitButton = document.getElementById('button-send')
        if (cardList[actualCard].includes(userInput)){
        
            setGameScore({totalTries: ++gameScore.totalTries, totalSuccess: ++gameScore.totalSuccess, 
                totalFails: gameScore.totalFails});
            
            nextPhoto(gameInfo, setActualCard);
            toggleCorrect(inputBox);
        }else{
            
            setGameScore({totalTries: ++gameScore.totalTries, totalSuccess: gameScore.totalSuccess, 
                totalFails: ++gameScore.totalFails});
            
            toggleIncorrect(inputBox);

        }
    }

        return(       
         <>
            <div className='body'>
                <div className='principal-container'>
                    <div className='back'>
                    <div className='back-button'>                     
                            <Link href ='/'> 
                                <a>
                                    <div className='aDiv'>
                                        <Image src={backArrow} alt="" width={30} height={30} layout='fixed'/>
                                    </div>
                                </a>
                            </Link> 
                        </div>
                    </div>

                    <div className='second-container'>
                        <div className='game-container'>
                            <div className='game-card-container'>
                                <Card 
                                id={actualCard} 
                                type={gameInfo.type} 
                                photoCode={photoCode}
                                lvl={gameInfo.lvl}
                                syllable={syllable}
                                />
                            </div>
                                        
                            <form className='input-container'>
                                <input 
                                onChange={handleChange} 
                                className='input-text' 
                                id='input-text-box'
                                type="text"
                                autoComplete="off"
                                />
                                <CustomButton click={handleSubmit} id ='button-send' button='button-send' > Send</CustomButton>
                            </form>
    
                            <div className='game-info'>
                                {/* <Chrono/> */}
                                <p>Tries: {gameScore.totalTries}</p>
                                <p>Success: {gameScore.totalSuccess}</p>
                                <p>Fail: {gameScore.totalFails}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>   
             <style jsx>{styles}</style>
         </>
     )

}
    
        


