import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'
import { animateWithGsap } from '../utils/animations'


const Hihglights = ({themeColor,setThemeColor}) => {
  useGSAP(() => {
    // gsap.to('#title',{opacity:1,y:0})
    animateWithGsap('#title', {
      y: 0, opacity: 1
    })
    animateWithGsap('.link', {
      y: 0, opacity: 1
    })
  }, [])
  return (
    <section className={`w-screen overflow-hidden h-full common-padding ${themeColor?'bg-gray-50':'bg-zinc'}`} id="highlights">
      <div className="screen-max-width">
        <div className='mb-12 w-full items-end md:flex justify-between'>
          <h1 id="title" className='section-heading'>
            Watch the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Hihglights
