import { defineStore } from "pinia";

export const useSosmedStore = defineStore("sosmeds", {
    state: () => ({
        sosmeds: [
            { id: 'linkedin', link: 'https://www.linkedin.com/in/andryan-zulfi-933401263/' },
            { id: 'instagram', link: 'https://www.instagram.com/zlfrts_/' },
            { id: 'tiktok', link: 'https://www.tiktok.com/@xyanzlfrts_' },
            { id: 'github', link: 'https://github.com/andryanzulfi' },
          ],
      
    })
})