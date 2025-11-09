'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        naver: any;
        initNaverMap?: () => void;
    }
}

const NCP_KEY_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID!;

export default function NaverMap() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        if (window.naver?.maps) {
            init();
            return;
        }

        window.initNaverMap = () => {
            init();
        };

        const script = document.createElement('script');
        script.src =
            `https://oapi.map.naver.com/openapi/v3/maps.js` +
            `?ncpKeyId=${NCP_KEY_ID}&callback=initNaverMap`;
        script.async = true;
        document.head.appendChild(script);

        return () => {
            script.remove();
        };
    }, []);

    const init = () => {
        const { naver } = window;
        if (!naver || !containerRef.current) return;

        new naver.maps.Map(containerRef.current, {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10,
        });
    };

    return <div ref={containerRef} style={{ width: '100%', height: '400px' }} />;
}