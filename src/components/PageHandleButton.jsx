function PageHandleButton({currentPage, totalPage, isFirst, isLast, onFirstClick, onLastClick, onPreviousClick,onNextClick}) {
    if(totalPage === 0){
        return
    }

    if(totalPage === 1){
        return(
            <button className='w-10 h-10 rounded shadow-md flex justify-center items-center text-base tracking-wider text-black'>{currentPage}</button>
        )
    } else {
        return (
            <div className='flex gap-2'>
                <button onClick={onFirstClick} disabled={isFirst} className='w-10 h-10 rounded shadow-md flex justify-center items-center text-base tracking-wider text-black'>{`<<`}</button>
                <button onClick={onPreviousClick} disabled={isFirst} className='w-10 h-10 rounded shadow-md flex justify-center items-center text-base tracking-wider text-black'>{`<`}</button>
                <button className='w-10 h-10 rounded shadow-md flex justify-center items-center text-base tracking-wider text-black'>{currentPage}</button>
                <div className="w-10 h-10 rounded flex justify-center items-center text-base tracking-wider text-black">{`...`}</div>
                <button className='w-10 h-10 rounded shadow-md flex justify-center items-center text-base tracking-wider text-black'>{totalPage}</button>
                <button onClick={onNextClick} disabled={isLast} className='w-10 h-10 rounded shadow-md flex justify-center items-center text-base tracking-wider text-black'>{`>`}</button>
                <button onClick={onLastClick} disabled={isLast} className='w-10 h-10 rounded shadow-md flex justify-center items-center text-base tracking-wider text-black'>{`>>`}</button>
            </div>
          )        
    }
}

export default PageHandleButton