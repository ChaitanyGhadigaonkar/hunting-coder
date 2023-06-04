const WORDS_PER_MINUTE = 275;


const calculateTime =(content)=>{
    const words = content.split(" ").length;
    const actualTime = words/WORDS_PER_MINUTE;
    const readTime = Math.round(actualTime)
    if(readTime == 0){
        return 1;
    }else{
        return readTime+1;
    }
}

export default calculateTime;
