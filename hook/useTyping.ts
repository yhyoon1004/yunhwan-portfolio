// useTyping.ts
import { useEffect, useMemo, useState } from 'react';

// usePrefersReducedMotion: 미디어쿼리 구독(콜백 안에서 setState = OK)
function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const m = window.matchMedia('(prefers-reduced-motion: reduce)');
        // 초기 동기화
        setReduced(m.matches);
        // 구독 (외부 이벤트 콜백에서 setState → 권장 패턴)
        const onChange = () => setReduced(m.matches);
        m.addEventListener?.('change', onChange);
        return () => m.removeEventListener?.('change', onChange);
    }, []);

    return reduced;
}

type Options = { speed?: number; delay?: number; loop?: boolean };

export function useTyping(text: string, opts: Options = {}) {
    const { speed = 60, delay = 0, loop = false } = opts;
    const reduced = usePrefersReducedMotion();

    // 일반 모드에서만 인덱스 증가
    const [i, setI] = useState(0);

    useEffect(() => {
        // 🔴 이펙트 본문에서 즉시 setState 호출 금지 → 그냥 건너뛰기
        if (reduced) return;

        let idx = 0;                // 초기화는 지역 변수로
        let timer: number | null = null;
        const start = window.setTimeout(() => {
            timer = window.setInterval(() => {
                idx += 1;
                if (idx <= text.length) {
                    // ✅ 타이머 콜백(외부 시스템) 안에서 setState → OK
                    setI(idx);
                } else if (loop) {
                    idx = 0;
                    setI(0);
                } else if (timer) {
                    window.clearInterval(timer);
                }
            }, speed);
        }, delay);

        return () => {
            window.clearTimeout(start);
            if (timer) window.clearInterval(timer);
        };
    }, [text, speed, delay, loop, reduced]);

    // 감소 모션 모드에선 상태를 건드리지 않고 바로 전체 문자열 반환
    return reduced ? text : text.slice(0, i);
}
