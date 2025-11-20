import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import ProjectList from '@json/project-list.json'
import {NextButtonOfMemo, PrevButtonOfMemo, usePrevNextButtons} from "@components/project/EmblaCarouselArrowButtons";
import {DotButtonOfMemo, useDotButton} from "@components/project/EmblaCarouselDot";
import BlurText from "@components/effect/text/BlurText";
import {motion} from "motion/react";
import Box from "@mui/material/Box";
import {useCallback, useRef} from "react";
import {blue} from "@mui/material/colors";
import {NeonBoxOfMemo} from "@components/common/NeonBox";

const MotionBox = motion.create(Box);

export default function ProjectPage() {
    const autoPlay = useRef(
        Autoplay({playOnInit: true, delay: 3000})
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, dragFree: true,}, [autoPlay.current])


    const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi)
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const handlePrev = useCallback(() => {
        onPrevButtonClick();
    }, [onPrevButtonClick]);

    const handleNext = useCallback(() => {
        onNextButtonClick();
    }, [onNextButtonClick]);


    return (
        <>
            <Box sx={{pt: 2}}>
                <BlurText
                    variant={"h4"}
                    text={"현직 업무 및 프로젝트"}
                    fontWeight={700}
                    delay={150}
                    animateBy="words"
                    direction="top"
                />
            </Box>
            <MotionBox
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                sx={[{px: 0, borderRadius: 4, my: 2}]}
            >
                <NeonBoxOfMemo>
                    <Box
                        id={"embla"}
                        sx={{
                            overflow: 'hidden', margin: 'auto',
                            "--slide-height": "19rem",
                            "--slide-spacing": "1rem",
                            "--slide-size": "70%"
                        }} ref={emblaRef}>
                        <Box
                            id={"embla_container"}
                            sx={{
                                display: "flex",
                                touchAction: "pan-y", gap: 1,
                                marginLeft: 'calc(var(--slide-spacing) * -1)',
                            }}>
                            {
                                ProjectList.map((project, index) => (
                                    <Box key={index}
                                         id={'embla_slide' + '_' + index}
                                         sx={{
                                             transform: "translate3d(0, 0, 0)",
                                             flex: "0 0 var(--slide-size)",
                                             minWidth: 0,
                                             paddingLeft: "var(--slide-spacing)",
                                             py: 0.5
                                         }}>
                                        <Box component={"img"}
                                             src={project.thumb}
                                             alt={project.title}
                                             sx={(theme) => ({
                                                 width: "100%",
                                                 aspectRatio: 9 / 5,
                                                 borderRadius: 4,
                                                 border: "1px solid",
                                                 borderColor: (theme.vars || theme).palette.divider,
                                                 boxShadow: theme.shadows[2],
                                             })}
                                        />
                                    </Box>
                                ))
                            }
                        </Box>

                        <Box
                            id={"embla__controls"}
                            sx={(theme) => ({
                                display: {xs: 'block', md: "flex"},
                                justifyContent: "space-between", alignItems: "center",
                                pt: 2, px: 2,
                                borderTop: "1px solid ",
                                borderColor: (theme.vars || theme).palette.divider,
                                boxShadow: theme.shadows[2],
                            })}
                            draggable={false}
                        >
                            <Box
                                id={"embla__buttons"}
                                sx={{display: "flex", justifyContent: {xs: 'right', md: 'space-between'}}}>
                                <PrevButtonOfMemo onClick={handlePrev} disabled={prevBtnDisabled}/>
                                <NextButtonOfMemo onClick={handleNext} disabled={nextBtnDisabled}/>
                            </Box>

                            <Box
                                id={"embla__dots"}
                                sx={{
                                    flexWrap: "wrap",
                                    display: {xs: 'none', md: "flex"}, gap: 1,
                                    justifyContent: "flex-end",
                                    zIndex:2,
                                }}>
                                {
                                    scrollSnaps.map((_, index) => (
                                        <DotButtonOfMemo
                                            sx={{
                                                color: selectedIndex == index ? blue[900] : blue[800],
                                            }}
                                            key={index}
                                            onClick={() => onDotButtonClick(index)}
                                        >
                                        </DotButtonOfMemo>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                </NeonBoxOfMemo>

            </MotionBox>
        </>
    )
}
