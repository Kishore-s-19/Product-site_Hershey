"use client";
import { useEffect } from 'react';

export default function TabManager() {
    useEffect(() => {
        const originalTitle = document.title;
        const scrollText = "👀 Come back… the chocolate misses you     ";
        let scrollInterval: NodeJS.Timeout | null = null;
        let currentIndex = 0;

        const handleVisibilityChange = () => {
            if (document.hidden) {
                scrollInterval = setInterval(() => {
                    document.title = scrollText.substring(currentIndex) + scrollText.substring(0, currentIndex);
                    currentIndex = (currentIndex + 1) % scrollText.length;
                }, 100);
            } else {
                if (scrollInterval) clearInterval(scrollInterval);
                document.title = originalTitle;
                currentIndex = 0;
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (scrollInterval) clearInterval(scrollInterval);
            document.title = originalTitle;
        };
    }, []);

    return null;
}
