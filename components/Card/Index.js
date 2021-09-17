import './styles.js'
import Image from 'next/image'

import FlipCard from '../FlipCard/index.js';
import styles from './styles.js';

import { urlListConst } from '../../constants/lists'
export default function Card (props){

    const urlList = urlListConst;

    if(props.photoCode){

        return(
            <>
                <div className='card-container'>
                        {/* <img src={urlList[props.photoCode]} alt="" /> */}
                        {urlList[props.photoCode].map((url, index) => {
                            if (index === 1){
                                return (
                                    <div className='individual-card-writing' key={index}>
                                        <img src={url} className='writing' key={index} alt=""/>
                                    </div>
                                )
                            }else{
                                return (
                                    <FlipCard syllable={props.syllable} key={index}>
                                        <div className='individual-card'>
                                            <img src={url} key={index} alt="" />                                   
                                        </div>                        
                                    </FlipCard>
                                )
                                    
                                    
                            }
                            
                        
                        })}
                        
                        
                </div>
                <style jsx global>{styles}</style>
            </>
        )
    }else{
        return(
            <>
                <div className='card-container'>
                    
                </div>
                
            </>

        )
    }
    
}