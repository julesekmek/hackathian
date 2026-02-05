export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#050505] text-white/60 text-sm">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#FFE99A] to-[#FF5F5F]" />
          <span className="font-display font-bold text-white text-lg">Hackathian</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Manifesto</a>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <p>© 2026 Hackathian. All rights reserved.</p>
      </div>
    </footer>
  );
}
