'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import {AccountBox} from "@mui/icons-material";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";

declare global {
    interface Window {
        naver: any;
    }
}

const NCP_KEY_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID!;

export default function NaverMap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null);
    const initializedRef = useRef(false);

    /** 지도 초기화 함수 */
    const initMap = () => {
        if (initializedRef.current) return;
        if (!window.naver || !containerRef.current) return;

        initializedRef.current = true;

        mapRef.current = new window.naver.maps.Map(containerRef.current, {
            center: new window.naver.maps.LatLng(37.578886, 127.003041),
            zoom: 10,
        });


        // 첫 렌더 후 자동 리사이즈 (렌더 타이밍 보정)
        setTimeout(() => {
            mapRef.current?.autoResize?.();
        }, 100);
    };

    /** 페이지 전환이나 탭 복귀 시 강제 리사이즈 */
    useEffect(() => {
        const handleVisibility = () => {
            if (document.visibilityState === 'visible' && mapRef.current) {
                mapRef.current.autoResize?.();
            }
        };

        window.addEventListener('visibilitychange', handleVisibility);
        window.addEventListener('resize', handleVisibility);

        return () => {
            window.removeEventListener('visibilitychange', handleVisibility);
            window.removeEventListener('resize', handleVisibility);
        };
    }, []);

    return (
        <>
            {/* ✅ 스크립트가 로드될 때 onLoad로 initMap 실행 */}
            <Script
                src={`https://oapi.map.naver.com/openapi/v3/maps.js` + `?ncpKeyId=${NCP_KEY_ID}&callback=initNaverMap`}
                strategy="afterInteractive"
                onLoad={initMap}
                onError={(e) => console.error('❌ 네이버 지도 스크립트 로드 실패', e)}
            />

            <Box
                component={Paper}
                ref={containerRef}
                style={{
                    backgroundColor: '#7ea0d1',
                    padding: '16px',
                    width: '100%',
                    height: '400px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                }}
            />
        </>
    );
}
