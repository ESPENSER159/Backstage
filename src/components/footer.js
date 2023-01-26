export default function Footer() {
    return (
        <div className="fixed bottom-0 right-0 flex flex-col text-lg w-48 text-right my-5 pl-10 mr-4 text-textAlt"> 
            <a id="refCard1" className="hover:underline" href="#card1">Issue #1</a>
            <a id="refCard2" className="hover:underline" data-mdb-duration="0" href="#card2">Issue #2</a>
            <a id="refCard3" className="hover:underline" data-mdb-duration="0" href="#card3">Issue #3</a>
            <a id="refCard4" className="hover:underline" href="#card4">Issue #4</a>
            <a id="refCard5" className="hover:underline" href="#card5">Issue #5</a>
            <a id="refCard6" className="hover:underline" href="#card6">Issue #6</a>
        </div>
    )
}