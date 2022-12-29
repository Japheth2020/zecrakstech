const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://zecrakstech-hs0g9cp5q-japheth2020.vercel.app'