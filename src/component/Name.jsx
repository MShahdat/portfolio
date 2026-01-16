import React, { useEffect, useState } from 'react';

const Name = () => {
    const texts = [" I'm Md. Shahdat", "I'm Md. Shahdat"];
    const [currentText, setCurrentText] = useState('');
    const [endValue, setEndValue] = useState(true);
    const [isForward, setisForward] = useState(true);
    const [index, setIndex]= useState(0);
    
    useEffect(() =>{
        const interval = setInterval(() =>{
            setCurrentText (texts[index].substring(0,endValue));
            if (isForward){
                setEndValue((prev) => prev+1);
            }else{
                setEndValue((prev) => prev-1)
            }
            if (endValue > texts[index].length+10){
                setisForward(false);
            }
            if (endValue <2.1){
                setisForward(true);
                setIndex((prev) => prev & texts.length);
            }
        },100 );
        return ()=> clearInterval(interval)
    }, [endValue, isForward, index, texts]);

    return (
        <div className='transitions ease duration-300'>
            {currentText}
        </div>
    );
};

export default Name;