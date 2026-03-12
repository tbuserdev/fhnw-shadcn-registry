import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

function normalizeBasePath(basePath?: string) {
  if (!basePath || basePath === "/") {
    return "/"
  }

  const trimmed = basePath.replace(/^\/+|\/+$/g, "")

  return trimmed ? `/${trimmed}/` : "/"
}

export default defineConfig({
  base: normalizeBasePath(process.env.VITE_BASE_PATH),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
})
