import getRandomCard from './getRandomCard'

export default function nextPhoto (gameInfo, setActualCard) {
    
    if (gameInfo.maxCard === undefined){
        gameInfo.maxCard = cardListLvl[gameInfo.lvl];
    }

    setActualCard(getRandomCard(gameInfo.minCard, gameInfo.maxCard));
}