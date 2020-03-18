import React, { Component } from 'react'
import Card from './Card'

import adacats from '../images/Adacats.png'
import boxertocat from '../images/boxertocat_octodex.jpg'
import brennatocat from '../images/Brennatocat.png'
import filmtocats from '../images/filmtocats.png'
import fintechtocat from '../images/Fintechtocat.png'
import hulacat from '../images/hula_loop_octodex03.gif'
import octogatos from '../images/Octogatos.png'
import umbrellatocat from '../images/puddle_jumper_octodex.jpg'
import scubatocat from '../images/scubatocat.png'
import sentrytocat from '../images/Sentrytocat_octodex.jpg'
import surftocat from '../images/surftocat.png'
import terracottocat from '../images/Terracottocat_Single.png'
import icon1 from '../images/icon1.jpg'
import icon2 from '../images/icon2.jpg'
import icon3 from '../images/icon3.jpg'
import icon4 from '../images/icon4.png'
import icon5 from '../images/icon5.jpg'
import icon6 from '../images/icon6.jpg'
import icon7 from '../images/icon7.jpg'
import icon8 from '../images/icon8.jpg'

export class Kittehs extends Component {
  render() {
    const kittehs = [
      {
        name: 'Terracottocat',
        number: '149',
        url: terracottocat,
        icon: icon1,
      },
      { name: 'Octogatos', number: '148', url: octogatos, icon: icon2 },
      { name: 'Adacats', number: '147', url: adacats, icon: icon2 },
      {
        name: 'Fintechtocat',
        number: '146',
        url: fintechtocat,
        icon: icon3,
      },
      { name: 'Brennatocat', number: '145', url: brennatocat, icon: icon4 },
      { name: 'Filmtocats', number: '144', url: filmtocats, icon: icon5 },
      { name: 'Sentrytocat', number: '143', url: sentrytocat, icon: icon6 },
      {
        name: 'Umbrellatocat',
        number: '142',
        url: umbrellatocat,
        icon: icon7,
      },
      { name: 'Boxertocat', number: '141', url: boxertocat, icon: icon7 },
      { name: 'Surftocat', number: '140', url: surftocat, icon: icon8 },
      { name: 'Hulacat', number: '139', url: hulacat, icon: icon5 },
      { name: 'Scubatocat', number: '138', url: scubatocat, icon: icon1 },
    ]

    return (
      <main>
        <ul>
          <section>
            {kittehs.map(kitty => {
              return (
                <Card
                  catName={kitty.name}
                  catNumber={kitty.number}
                  imageUrl={kitty.url}
                  iconUrl={kitty.icon}
                />
              )
            })}
          </section>
        </ul>
      </main>
    )
  }
}

export default Kittehs
