"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageHeader from "@/app/_components/PageHeader";
import AnimatedBackground from "./components/AnimatedBackground";
import Pagination from "./components/Pagination";
import { MEMO_PAGE_DESCRIPTION, memoPosts } from "./data";

export default function MemoPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = memoPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(memoPosts.length / postsPerPage);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <PageHeader title="Memo" description={MEMO_PAGE_DESCRIPTION} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/memo/${post.id}`}
              className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer opacity-0 animate-fade-in-up block"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-cyan-600 overflow-hidden group">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-400 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs text-cyan-400">
                    {post.tag}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
