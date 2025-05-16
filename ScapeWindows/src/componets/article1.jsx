

export function Article1({setIndex}){
    return(
        <>
           <div className="floor">
                {Array.from({length: 40}, (_, i) => (
                    <div key={i} className={`square square${i}`}>
                        {i + 1}
                    </div>
                ))}
            </div>
            <button onClick={() => setIndex((prev) => prev + 1)}>siguiente</button>
        </>
    )
}