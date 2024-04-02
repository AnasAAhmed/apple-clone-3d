import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = ({themeColor,setThemeColor}) => {

    const videoRef = useRef();
    useGSAP(() => {
        gsap.to("#exploreVideo", {
            scrollTrigger: {
              trigger: "#exploreVideo",
              toggleActions: 'play pause reverse restart',
              start: '-10% bottom',
            },
            onComplete:()=>{
                videoRef.current.play();
            }
          })
        animateWithGsap('#features-heading', {
            y: 0, opacity: 1
        });
        animateWithGsap('.g_grow', {
            scale: 1,
            opacity: 1,
            ease: 'power1'
        }, { scrub: 5.5 }
        );
        animateWithGsap('.g_text', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration:1
        }
        );

    }, []);
    return (
        <section className={`h-full common-padding ${themeColor ? "bg-white":"bg-zinc"} relative overflow-hidden`}>
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h1 id="features-heading" className='section-heading'>
                        Explore the full story.
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center overflow-hidden">
                    <div className="mt-32 mb-24 text-center">
                        <h2 className="text-5xl lg:text-7xl font-semibold text-gray-200">iPhone</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold text-gray-200">Forged in titanium</h2>
                    </div>
                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video playsInline id='exploreVideo'
                                className='w-full h-full object-cover' preload='none' muted autoPlay ref={videoRef}
                            >
                                <source src={exploreVideo} type='video/mp4' />
                            </video>
                        </div>
                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                                </div>
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore2Img} alt="titanium" className="feature-video g_grow" />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                <div className="flex-center flex-1">
                                    <p className="feature-text  g_text">
                                        iPhone 15 Pro is {" "}
                                        <span className="text-white">
                                            the first iphone arrowspace-grade titanium design
                                        </span>,
                                        using the same alloy that spacecrafts use for missoins to Mars.
                                    </p>
                                </div>
                                <div className="flex-center flex-1">
                                    <p className="feature-text  g_text">
                                        Titanium has one of the best strength-to-weight ratios of any metal, making these our {" "}
                                        <span className="text-white">
                                            lightest Pro models ever.
                                        </span>,
                                       you'll notice difference the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
