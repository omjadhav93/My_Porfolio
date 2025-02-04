import { Poppins, Courier_Prime, Rubik_Gemstones } from 'next/font/google'

export const poppins = Poppins({
    weight: ['200', '300', '400', '500','600'],
    subsets: ['latin'],
    display: 'swap',
})

export const courier_prime = Courier_Prime({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const rubik_gemstones_regular = Rubik_Gemstones({
    weight: ['400'],
    subsets: ['latin'],
    display: 'auto'
})