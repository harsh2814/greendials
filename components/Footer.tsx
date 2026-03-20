export default function Footer() {
  return (
    <footer className="bg-greenSurface text-ivory border-t border-greenDark">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-sm font-serif italic text-ivoryMuted">
          Discover the rarest side of time
        </p>
        <p className="text-xs text-ivoryMuted mt-2">
          © {new Date().getFullYear()} GreenDials. All rights reserved.
        </p>
      </div>
    </footer>
  );
}