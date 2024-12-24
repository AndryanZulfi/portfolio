import { defineStore } from "pinia";

export const useSosmedStore = defineStore("sosmeds", {
    state: () => ({
        sosmeds: [
            { id: 'linkedin', link: 'https://www.linkedin.com/in/andryan-zulfi-933401263/' },
            { id: 'instagram', link: 'https://www.instagram.com/zlfrts_/profilecard/?igsh=MWpnd2w4amp3b3NjMw==' },
            { id: 'tiktok', link: 'https://www.tiktok.com/@xyanzlfrts_' },
          ],
      
    })
})