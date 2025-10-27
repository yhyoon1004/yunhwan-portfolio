import {NextRequest, userAgent} from "next/server";

/**
 * @return 'mobile' | 'tablet' | 'desktop' | undefined
 * **/
export default function useDeviceByServer(req: NextRequest) {
    const {device} = userAgent(req);

    const mobile = /(Android|iPhone|iPod|Windows Phone|webOS|BlackBerry|IEMobile|Opera Mini)/i.test(device.type ?? '');
    const tablet = /(iPad|Tablet)/i.test(device.type ?? '');
    if (mobile) return "mobile";
    if (tablet) return "tablet";
    return "desktop";
}