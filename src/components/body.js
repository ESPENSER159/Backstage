import Card from './card';
import Issue1 from '../images/issue1.png';
import Issue2 from '../images/issue2.png';
import Issue3 from '../images/issue3.png';
import Issue4 from '../images/issue4.png';
import Issue5 from '../images/issue5.png';
import Issue6 from '../images/issue6.png';

export default function Body() {

    const scrollHandler = () => {
        let card1 = document.getElementById('card1')
        let card2 = document.getElementById('card2')
        let card3 = document.getElementById('card3')
        let card4 = document.getElementById('card4')
        let card5 = document.getElementById('card5')
        let card6 = document.getElementById('card6')

        let beforeDistance = 200

        let pos_card1 = card1.offsetTop - beforeDistance
        let pos_card2 = card2.offsetTop - beforeDistance
        let pos_card3 = card3.offsetTop - beforeDistance
        let pos_card4 = card4.offsetTop - beforeDistance
        let pos_card5 = card5.offsetTop - beforeDistance
        let pos_card6 = card6.offsetTop - beforeDistance

        let distance_card1 = pos_card1
        let distance_card2 = pos_card2
        let distance_card3 = pos_card3
        let distance_card4 = pos_card4
        let distance_card5 = pos_card5
        let distance_card6 = pos_card6

        document.getElementById('fullpage').style.backgroundColor = 'white'

        for (let i = 1; i <= 6; i++) {
            document.getElementById(`refCard${i}`).style.fontWeight = '500'
        } 

        if (window.pageYOffset >= distance_card1 && window.pageYOffset <= distance_card2) {
            document.getElementById('fullpage').style.backgroundColor = 'white'
            document.getElementById('refCard1').style.fontWeight = 'bold'
        }
        if (window.pageYOffset >= distance_card2 && window.pageYOffset <= distance_card3) {
            document.getElementById('fullpage').style.backgroundColor = '#00c1b5'
            document.getElementById('refCard2').style.fontWeight = 'bold'
        }
        if (window.pageYOffset >= distance_card3 && window.pageYOffset <= distance_card4) {
            document.getElementById('fullpage').style.backgroundColor = '#ffbe00'
            document.getElementById('refCard3').style.fontWeight = 'bold'
        }
        if (window.pageYOffset >= distance_card4 && window.pageYOffset <= distance_card5) {
            document.getElementById('fullpage').style.backgroundColor = '#ff651a'
            document.getElementById('refCard4').style.fontWeight = 'bold'
        }
        if (window.pageYOffset >= distance_card5 && window.pageYOffset <= distance_card6) {
            document.getElementById('fullpage').style.backgroundColor = '#1d3fbb'
            document.getElementById('refCard5').style.fontWeight = 'bold'
        }
        if (window.pageYOffset >= distance_card6) {
            document.getElementById('fullpage').style.backgroundColor = '#e30512'
            document.getElementById('refCard6').style.fontWeight = 'bold'
        }
    }

    window.addEventListener('scroll', scrollHandler)

    return (
        <div id='fullpage' className="flex justify-center items-center flex-col ease-in duration-300">
            <Card id_card={'card1'} image={Issue1} title={'Issue #1'} colorText={'#e568ac'} />
            <Card id_card={'card2'} image={Issue2} title={'Issue #2'} />
            <Card id_card={'card3'} image={Issue3} title={'Issue #3'} />
            <Card id_card={'card4'} image={Issue4} title={'Issue #4'} />
            <Card id_card={'card5'} image={Issue5} title={'Issue #5'} />
            <Card id_card={'card6'} image={Issue6} title={'Issue #6'} />
        </div>
    )
}