import Layout from "@components/layout/Layout";
import TypingEffectTitle from "@components/common/TypingEffectTitle";
import {Box} from "@mui/material";
import useDeviceByClient from "../../../hook/useDeviceByClient";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import {useEffect} from "react";
import ProjectList from '@json/project-list.json'
import {NextButton, PrevButton, usePrevNextButtons} from "@components/project/EmblaCarouselArrowButtons";
import {DotButton, useDotButton} from "@components/project/EmblaCarouselDot";
import BlurText from "@components/effect/text/BlurText";

export default function ProjectPage() {

    const device = useDeviceByClient();
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, dragFree: true,},[
        Autoplay({ playOnInit: false, delay: 3000 })
    ])
    const {selectedIndex, scrollSnaps, onDotButtonClick} =
        useDotButton(emblaApi)
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <Layout>
            <BlurText
                variant={"h4"}
                text={"프로젝트"}
                fontWeight={700}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
            />

            <Box>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {
                            ProjectList.map((project, index) => (
                                <div key={index} className="embla__slide">
                                    <img src={project.thumb}
                                         alt={project.title}
                                         width={"100%"}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="embla__controls">
                        <div className="embla__buttons">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                        </div>

                        <div className="embla__dots">
                            {
                                scrollSnaps.map((_, index) => (
                                    <DotButton
                                        key={index}
                                        onClick={() => onDotButtonClick(index)}
                                        className={'embla__dot'.concat(
                                            index === selectedIndex ? ' embla__dot--selected' : ''
                                        )}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Box>
        </Layout>
        )
}
