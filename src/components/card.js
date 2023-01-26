export default function Cart({ id_card, image, title, colorText }) {
    return (
        <div id={id_card} className="flex flex-col justify-center items-center content-center pt-9 h-screen"  >
            <img className="h-2/4" src={image} alt={id_card} />
            <div className="w-full text-center">
                <p className="font-bold text-xl text-text mb-4 w-full">{title}</p>
                <p className="font-bold text-md text-text mb-4 px-4 pt-1 w-full" style={{color: colorText || '#fff'}}>BUY HERE</p>
                <p className="font-bold text-md text-text mb-4 px-4 pt-1 w-full">or in <label style={{color: colorText || '#fff'}}>selected stores.</label></p>
            </div>
        </div>
    )
}