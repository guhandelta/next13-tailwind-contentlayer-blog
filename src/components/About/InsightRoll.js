

export default function InsightRoll({ insights }){

    return(
        <div className="w-full bg-purple-600 text-white whitespace-nowrap overflow-hidden">
            <div className="animate-roll w-full py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-base">
                {insights.map(text => (
                    <div className="">
                        {text} <span className="px-4">|</span> {" "}
                    </div>
                ))}
            </div>
        </div>
    );
}