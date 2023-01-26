import Cart from './cart';
import Issue1 from '../images/issue1.png';
import Issue2 from '../images/issue2.png';
import Issue3 from '../images/issue3.png';
import Issue4 from '../images/issue4.png';
import Issue5 from '../images/issue5.png';
import Issue6 from '../images/issue6.png';

export default function Body() {

    const scrollHandler = () => {
        let cart1 = document.getElementById('cart1')
        let cart2 = document.getElementById('cart2')
        let cart3 = document.getElementById('cart3')
        let cart4 = document.getElementById('cart4')
        let cart5 = document.getElementById('cart5')
        let cart6 = document.getElementById('cart6')

        let beforeDistance = 200

        let pos_cart1 = cart1.offsetTop - beforeDistance
        let pos_cart2 = cart2.offsetTop - beforeDistance
        let pos_cart3 = cart3.offsetTop - beforeDistance
        let pos_cart4 = cart4.offsetTop - beforeDistance
        let pos_cart5 = cart5.offsetTop - beforeDistance
        let pos_cart6 = cart6.offsetTop - beforeDistance

        let distance_cart1 = pos_cart1
        let distance_cart2 = pos_cart2
        let distance_cart3 = pos_cart3
        let distance_cart4 = pos_cart4
        let distance_cart5 = pos_cart5
        let distance_cart6 = pos_cart6

        document.getElementById('fullpage').style.backgroundColor = 'white'

        if(window.pageYOffset >= distance_cart1) document.getElementById('fullpage').style.backgroundColor = 'white'
        if(window.pageYOffset >= distance_cart2) document.getElementById('fullpage').style.backgroundColor = '#00c1b5'
        if(window.pageYOffset >= distance_cart3) document.getElementById('fullpage').style.backgroundColor = '#ffbe00'
        if(window.pageYOffset >= distance_cart4) document.getElementById('fullpage').style.backgroundColor = '#ff651a'
        if(window.pageYOffset >= distance_cart5) document.getElementById('fullpage').style.backgroundColor = '#1d3fbb'
        if(window.pageYOffset >= distance_cart6) document.getElementById('fullpage').style.backgroundColor = '#e30512'
    }

    window.addEventListener('scroll', scrollHandler)

    return (
        <div id='fullpage' className="flex justify-center items-center flex-col ease-in duration-300">
            <Cart id_cart={'cart1'} image={Issue1} title={'Issue #1'} />
            <Cart id_cart={'cart2'} image={Issue2} title={'Issue #2'} />
            <Cart id_cart={'cart3'} image={Issue3} title={'Issue #3'} />
            <Cart id_cart={'cart4'} image={Issue4} title={'Issue #4'} />
            <Cart id_cart={'cart5'} image={Issue5} title={'Issue #5'} />
            <Cart id_cart={'cart6'} image={Issue6} title={'Issue #6'} />
        </div>
    )
}