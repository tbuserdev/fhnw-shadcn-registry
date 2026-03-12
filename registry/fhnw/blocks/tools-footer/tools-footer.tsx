function ToolsFooter() {
  return (
    <footer className="border border-border bg-white">
      <div className="border-t-4 border-[#fde703] px-6 py-5">
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-black sm:flex-row">
          <a className="underline" href="https://www.fhnw.ch" target="_blank" rel="noreferrer">
            www.fhnw.ch
          </a>
          <span className="hidden sm:inline">|</span>
          <a className="underline" href="#">
            Impressum
          </a>
          <span className="hidden sm:inline">|</span>
          <a className="underline" href="#">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  )
}

export { ToolsFooter }
