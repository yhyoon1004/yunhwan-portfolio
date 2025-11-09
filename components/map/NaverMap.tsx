// app/components/NaverMap.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

declare global { interface Window { naver: any } }
const NCP_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID??"";
export default function NaverMap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (window.naver?.maps) { setReady(true); return; }
        const script = document.createElement('script');
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NCP_CLIENT_ID}&submodules=geocoder`;
        script.async = true;
        script.onload = () => setReady(true);
        document.head.appendChild(script);
        return () => { document.head.removeChild(script); };
    }, []);

    useEffect(() => {
        if (!ready || !containerRef.current) return;
        const { naver } = window;

        const map = new naver.maps.Map(containerRef.current, {
            center: new naver.maps.LatLng(37.4979, 127.0276), // 강남역
            zoom: 14,
            mapTypeControl: true,
        });

        // 현재 위치로 이동 (브라우저 Geolocation)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const pos = new naver.maps.LatLng(coords.latitude, coords.longitude);
                map.setCenter(pos);
                new naver.maps.Marker({ position: pos, map, title: '내 위치' });
            });
        }
    }, [ready]);

    return <div ref={containerRef} style={{ width: '100%', height: '60vh' }} />;
}
