export default function Footer() {
    return (
        <div className="fixed bottom-0 right-0 flex flex-col text-lg w-48 text-right my-5 pl-10 mr-4 text-textAlt"> 
            <a className="hover:underline scroll-smooth" href="#cart1">Issue #1</a>
            <a className="hover:underline scroll-smooth" href="#cart2">Issue #2</a>
            <a className="hover:underline" href="#cart3">Issue #3</a>
            <a className="hover:underline" href="#cart4">Issue #4</a>
            <a className="hover:underline" href="#cart5">Issue #5</a>
            <a className="hover:underline" href="#cart6">Issue #6</a>
        </div>
    )
}