import { defineStore } from "pinia";

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [
            { 
                id: 'toDoList',
                title: 'To-Do-List', 
                description: 'To-Do List app is a web-based application that allows users to record, update, mark, and delete their to-do lists. This project is built using modern front-end technology with Vue.js and backend with Express.js and MongoDB as its database.', 
                status: 'Completed', 
                progress: 100,
                link: 'https://todolist-zlf.vercel.app/'
            },
            { 
                id: 'hotWheelsHaven', 
                title: 'HotWheels Haven', 
                description: 'Hot Wheels Haven is an e-commerce simulation platform designed specifically for Hot Wheels miniature car enthusiasts and collectors. The website provides a wide range of Hot Wheels products, from classic series to limited editions, with an intuitive interface and features that make it easy for users to search, buy, and collect.',
                status: 'Pending',
                progress: 50,
                link: 'https://andryanzulfi.github.io/HotwheelsHaven/'
            },
            { 
                id: 'gallNime', 
                title: 'GallNime', 
                description: 'GallNime is a website that provides high-quality photo galleries and images from various popular anime. This website is designed for anime fans who want to find and download their favorite images of iconic characters, scenes, or moments in anime. With a simple interface and easy navigation, GallNime is the perfect place for anime art lovers.',
                status: 'Pending',
                progress: 30,
                link: 'https://andryanzulfi.github.io/GallNime/'
            },
            {
                id: 'katik',
                title: 'Katik',
                description: 'Katik is a simple tool designed to help calculate the area and perimeter of triangles quickly and accurately. Users only need to enter the length of the side or other required parameters, and the calculator will provide the results instantly.',
                status: 'Completed',
                progress: 100,
                link: 'https://revou-fundamental-course.github.io/25-dec-23-AndryanZulfi/'
            },
            {
                id: 'galeryNaruto',
                title: 'Gallery Naruto',
                description: 'GaleryNaruto is a simple gallery website designed to display a collection of character photos from the popular anime Naruto. The website features images of Naruto and his friends, including characters such as Sasuke, Sakura, Kakashi',
                status: 'Completed',
                progress: 100,
                link: 'https://andryanzulfi.github.io/GalleryNaruto/'
            }
          ],
    })
})