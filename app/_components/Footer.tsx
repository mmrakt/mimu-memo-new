import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-800/50 to-slate-900 border-t border-indigo-500/20 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              About
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              フルスタックデベロッパーとして、革新的なデジタルソリューションを提供しています。
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-indigo-500/10">
          <p className="text-slate-400 text-sm">
            &copy; 2025 山田 太郎. All rights reserved. | Built with{" "}
            <Link
              href="#"
              className="text-indigo-400 hover:text-cyan-400 transition-colors"
            >
              love
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="text-indigo-400 hover:text-cyan-400 transition-colors"
            >
              code
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
