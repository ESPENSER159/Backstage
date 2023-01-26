export default function Cart({ id_cart, image, title }) {
    return (
        <div id={id_cart} className="flex flex-col justify-center items-center content-center pt-9 h-screen"  >
            <img className="h-2/4" src={image} alt={id_cart} />
            <div className="w-full text-center">
                <p className="font-bold text-xl text-text mb-4 w-full">{title}</p>
                <p className="font-bold text-md text-text mb-4 px-4 pt-1 w-full">BUY HERE</p>
                <p className="font-bold text-md text-text mb-4 px-4 pt-1 w-full">or in selected stores.</p>
            </div>
        </div>
    )
}