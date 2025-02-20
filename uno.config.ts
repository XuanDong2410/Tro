import transformerDirectives from "@unocss/transformer-directives"
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWind
} from "unocss"

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify({
      prefix: "un-",
      prefixedOnly: true // <--
    }),
    presetTypography()
  ],
  transformers: [transformerDirectives()],
  theme: {
    breakpoints: {
      sm: "600px",
      md: "1024px",
      lg: "1440px",
      xl: "1920px"
    }
  },
})