import { useEffect, useId, useRef, useState } from "react"

interface BootstrapPreviewProps {
  html: string
}

export function BootstrapPreview({ html }: BootstrapPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState("100px")
  const instanceId = useId().replace(/:/g, "-")

  const baseUrl = import.meta.env.BASE_URL
  const cssPath = `${baseUrl}fhnw-bootstrap-v5/css/fhnw.min.css`.replace(/^\/+/, "/")

  const srcDoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="${cssPath}">
      <style>
        body { padding: 1rem; margin: 0; background: transparent; }
        .bootstrap-preview-root,
        .bootstrap-preview-root * {
          pointer-events: none !important;
          user-select: none;
        }
      </style>
    </head>
    <body>
      <div class="bootstrap-preview-root" aria-hidden="true">
        ${html}
      </div>
      <script>
        function sendHeight() {
          const height = document.body.scrollHeight;
          window.parent.postMessage({ type: 'resize', height: height, id: '${instanceId}' }, '*');
        }
        window.addEventListener('load', sendHeight);
        window.addEventListener('resize', sendHeight);
        // Mutation observer for dynamic content
        const observer = new MutationObserver(sendHeight);
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });
      </script>
    </body>
    </html>
  `

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data.type === 'resize' && e.data.id === instanceId) {
        setHeight(`${e.data.height}px`)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [instanceId])

  return (
    <iframe
      ref={iframeRef}
      srcDoc={srcDoc}
      className="w-full border-none bg-transparent"
      style={{ height, minHeight: '100px' }}
      title="Bootstrap Preview"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
