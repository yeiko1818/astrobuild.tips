/*{import('tailwindcss').Config}*/

module.exports = {
    content: ['./src/**/*/*.{astro,html,js,jsx,tsx,vue,svelte}'],
    theme: {
        extend: {

        }
    },
    plugin: [require('@tailwindcss/line-clamp')]
}