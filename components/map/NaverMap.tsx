'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        naver: any;
        initNaverMap?: () => void;
        navermap_authFailure?: () => void;
    }
}

const NCP_KEY_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID!;

export default function NaverMap() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<any>(null);       // ✅ 지도 인스턴스 저장
    const initedRef = useRef(false);        // ✅ StrictMode에서 두 번 init 방지

    useEffect(() => {
        if (!containerRef.current) return;
        if (!NCP_KEY_ID) {
            console.error('❌ NCP_KEY_ID 없음');
            return;
        }

        // 이미 한 번 초기화했다면 또 하지 않음 (dev StrictMode 방지)
        if (initedRef.current && window.naver?.maps && mapRef.current) {
            return;
        }

        // 스크립트가 이미 로드되어 있다면 바로 init
        if (window.naver?.maps) {
            init();
            return;
        }

        window.initNaverMap = () => {
            init();
        };

        window.navermap_authFailure = () => {
            console.error('❌ 네이버 지도 인증 실패');
        };

        const script = document.createElement('script');
        script.src =
            `https://oapi.map.naver.com/openapi/v3/maps.js` +
            `?ncpKeyId=${NCP_KEY_ID}&callback=initNaverMap`;
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // 스크립트는 굳이 제거 안 해도 됨 (원하면 주석 처리해도 됨)
            // script.remove();
        };
    }, []);

    const init = () => {
        if (initedRef.current) return;
        const { naver } = window;
        if (!naver || !containerRef.current) return;

        initedRef.current = true;
        mapRef.current = new naver.maps.Map(containerRef.current, {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10,
        });

        // 최초 한번 살짝 늦게 autoResize 한 번
        setTimeout(() => {
            mapRef.current?.autoResize?.();
        }, 0);
    };

    // ✅ 탭 전환/다른 페이지 갔다오기 후 다시 보일 때 강제 리사이즈
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
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '400px',
            }}
        />
    );
}
