import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Icons
import Thunderstorm from "@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg";
import Snow from "@bybas/weather-icons/design/fill/animation-ready/snow.svg";
import Sleet from "@bybas/weather-icons/design/fill/animation-ready/sleet.svg";
import Rain from "@bybas/weather-icons/design/fill/animation-ready/rain.svg";
import Overcast from "@bybas/weather-icons/design/fill/animation-ready/overcast.svg";
import Cloudy from "@bybas/weather-icons/design/fill/animation-ready/cloudy.svg";
import Sunny from "@bybas/weather-icons/design/fill/animation-ready/clear-day.svg";
import Unknown from "@bybas/weather-icons/design/fill/animation-ready/not-available.svg";

export enum WeatherStatus {
    LIGHTNING = "번개",
    SNOW = "눈",
    RAIN_SNOW = "비/눈",
    RAIN = "비",
    OVERCAST = "흐림",
    CLOUDY = "구름많음",
    SUNNY = "맑음",
    UNKNOWN = "정보없음"
}

interface WeatherItem {
    region: string;
    status: keyof typeof WeatherStatus;
    statusDescription: string;
    temperature: string;
    time: string;
}

const iconMap: Record<string, string> = {
    LIGHTNING: Thunderstorm,
    SNOW: Snow,
    RAIN_SNOW: Sleet,
    RAIN: Rain,
    OVERCAST: Overcast,
    CLOUDY: Cloudy,
    SUNNY: Sunny,
    UNKNOWN: Unknown,
};


const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState<WeatherItem[]>([]);
    const [emblaRef] = useEmblaCarousel({loop: true, axis: 'y'}, [
        Autoplay({delay: 2500, stopOnInteraction: true})
    ]);

    const fetchWeatherAPI = async () => {
        try {
            const res = await fetch("https://open.yunhwan.kr/weather/now");
            if (!res.ok) throw new Error("Failed to fetch weather data");
            const data = await res.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Weather fetch error:", error);
        }
    };

    useEffect(() => {
        fetchWeatherAPI();
    }, []);

    if (weatherData.length === 0) return null;

    return (
        <Box
            sx={{
                height: 40,
                overflow: 'hidden', // Viewport: 넘치는 부분 숨김
                backgroundColor: 'transparent',
                borderRadius: '20px',
                padding: '0 12px',
                width: 'fit-content'
            }}
            ref={emblaRef}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%' // Container: 세로 방향 flex 설정
            }}>
                {weatherData.map((item, index) => (
                    <Box
                        key={`${item.region}-${index}`}
                        sx={{
                            flex: '0 0 100%', // Slide: 각 슬라이드가 뷰포트 높이의 100%를 차지하게 함
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            minWidth: 0
                        }}
                    >
                        <Box
                            component="img"
                            src={iconMap[item.status] || Unknown}
                            alt={item.statusDescription}
                            sx={{width: 24, height: 24}}
                        />
                        <Typography variant="body2" sx={{
                            fontWeight: 600, fontSize: '0.875rem', whiteSpace: 'nowrap', color: 'text.primary',
                            textDecoration: 'none',
                        }}>
                            {item.region}
                        </Typography>
                        <Typography variant="body2" sx={{
                            fontSize: '0.875rem', color: 'text.primary',
                            textDecoration: 'none',
                        }}>
                            {item.temperature}°C
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default WeatherWidget