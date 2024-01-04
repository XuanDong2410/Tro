import { defineConfig } from "vite"
import React from "@vitejs/plugin-react-swc"
import UnoCSS from "@unocss/vite"

export default defineConfig({
    plugins: [
        React(),
        UnoCSS()
    ]
})