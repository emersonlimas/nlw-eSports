import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { CreateAdBanner } from './components/CreateAdBanner/CreateAdBanner';
import { GameBanner } from './components/GameBanner/GameBanner';
import logoImg from './assets/logo-nlw-esports.svg';
import './styles/main.css';
import { CreateAdModal } from './components/CreateAdModal/CreateAdModal';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 6
      },
    },[]);

  useEffect(() => {
    axios('http://localhost:3333/games')
    .then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div ref={sliderRef} className="grid grid-cols-6 gap-6 mt-16 keen-slider">
        {games.map(game => {
            return (
              <GameBanner
                key={game.id} 
                title={game.title} 
                bannerUrl={game.bannerUrl} 
                adsCount={game._count.ads}
              />
            )
          })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />

      </Dialog.Root>
    </div>
  )
}

export default App;
