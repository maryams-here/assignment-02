// components/MainContent.js

export default function Hero(){
    return(
        <div className="min-h-screen relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/do.jpg")' }} />
    <div className="relative text-black flex items-center  justify-center flex-col space-y-7 pt-40 ">
        <h1 className="font-bold text-4xl underline underline-offset-2 ">IT DONUTS'O CLOCK</h1>
        <p className="text-lg font-mono w-full max-w-3xl text-center"> You cant buy happiness but can buy donuts!! .</p>
        <button className="bg-pink-200 p-2 px-9 hover:bg-purple-400 rounded-full text-semibold text-xl">Get Offer</button>
    </div>
</div>

    )
}