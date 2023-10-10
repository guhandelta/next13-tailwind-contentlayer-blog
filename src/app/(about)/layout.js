import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
];

export default function AppLayout({ children }){
    // RootLayout cannot be used here as it is reserverd only for /app 
    return(
        <main className="w-screen flex flex-col items-center justify-center font-rh">
            <InsightRoll insights={insights} />
            {children}
        </main>
    );
}