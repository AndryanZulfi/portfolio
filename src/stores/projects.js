import { defineStore } from "pinia";

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [
            { 
                id: 'toDoList',
                title: 'To-Do-List', 
                description: 'Aplikasi To-Do List adalah aplikasi berbasis web yang memungkinkan pengguna untuk mencatat, memperbarui, menandai, dan menghapus daftar tugas mereka. Proyek ini dibuat menggunakan teknologi front-end modern dengan Vue.js serta backend yang kuat dengan Express.js dan MongoDB sebagai basis datanya. Aplikasi ini dirancang agar sederhana, responsif, dan mudah digunakan.', 
                status: 'Completed', 
                progress: 100,
                link: 'https://todolist-1iyo7w6rz-andryanzulfis-projects.vercel.app/'
            },
            { 
                id: 'hotWheelsHaven', 
                title: 'HotWheels Haven', 
                description: 'Hot Wheels Haven adalah platform e-commerce yang dirancang khusus untuk penggemar dan kolektor mobil miniatur Hot Wheels. Website ini menyediakan berbagai macam produk Hot Wheels, mulai dari seri klasik hingga edisi terbatas, dengan antarmuka yang intuitif dan fitur-fitur yang memudahkan pengguna dalam mencari, membeli, dan mengoleksi.',
                status: 'Pending',
                progress: 50,
                link: 'https://andryanzulfi.github.io/HotwheelsHaven/'
            },
            { 
                id: 'gallNime', 
                title: 'GallNime', 
                description: 'GallNime adalah website yang menyediakan galeri foto dan gambar berkualitas tinggi dari berbagai anime populer. Website ini dirancang untuk para penggemar anime yang ingin menemukan dan mendownload gambar-gambar favorit dari karakter, adegan, atau momen ikonik dalam anime. Dengan antarmuka yang sederhana dan navigasi yang mudah, GallNime adalah tempat yang sempurna bagi pencinta seni anime.',
                status: 'Pending',
                progress: 30,
                link: 'https://andryanzulfi.github.io/GallNime/'
            },
            {
                id: 'katik',
                title: 'Katik',
                description: 'Katik adalah alat sederhana yang dirancang untuk membantu menghitung luas dan keliling segitiga dengan cepat dan akurat. Pengguna hanya perlu memasukkan panjang sisi atau parameter lainnya yang diperlukan, dan kalkulator ini akan memberikan hasilnya secara instan.',
                status: 'Completed',
                progress: 100,
                link: 'https://revou-fundamental-course.github.io/25-dec-23-AndryanZulfi/'
            },
            {
                id: 'galeryNaruto',
                title: 'Gallery Naruto',
                description: 'GaleryNaruto adalah website galeri sederhana yang dirancang untuk menampilkan koleksi foto karakter dari anime populer Naruto. Website ini menampilkan berbagai gambar dari Naruto dan teman-temannya, termasuk karakter seperti Sasuke, Sakura, Kakashi, dan banyak lagi. ',
                status: 'Completed',
                progress: 100,
                link: 'https://andryanzulfi.github.io/GalleryNaruto/'
            }
          ],
    })
})