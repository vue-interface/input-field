module.exports = {
    content: [
        './index.html',
        './src/*.vue'
    ],
    theme: {
        extend: {},
    },
    presets: [
        require('@vue-interface/form-control/tailwindcss')
    ]
};