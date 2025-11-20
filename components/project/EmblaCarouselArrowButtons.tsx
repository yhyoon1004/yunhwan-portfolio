import React, {memo, useCallback, useEffect, useState} from 'react'
import {EmblaCarouselType} from 'embla-carousel'
import IconButton from "@mui/material/IconButton";
import {ButtonProps} from "@mui/material/Button/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}


const PrevButton = (props:ButtonProps) => {

    return (
        <IconButton type="button"{...props}>
            <ArrowBackIcon/>
        </IconButton>
    )
}

const NextButton= (props:ButtonProps) => {

    return (
        <IconButton type="button"{...props}>
            <ArrowForwardIcon/>
        </IconButton>
    )
}

export const PrevButtonOfMemo = memo(PrevButton);
export const NextButtonOfMemo = memo(NextButton);