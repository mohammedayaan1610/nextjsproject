"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TodoList from "@/components/TodoList";

export default function TodoPage() {
  
  // /api/todos
  return (
    <div className="min-h-screen flex flex-col bg-[#091b20] text-white selection:bg-[#fb9826] selection:text-[#091b20]">
      {/* 1. Shared Global Navbar */}
      <Navbar />

      {/* 2. Main To-Do Content Section */}
      <main className="flex-1 w-full pt-[110px] pb-20 px-5 sm:px-8 max-w-5xl mx-auto flex flex-col">
        {/* Editorial Page Header matching Vita visual identity */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/60 text-xs tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fb9826]" />
            Wellness & Trip Planner
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-white mb-3">
            To Do List
          </h1>
          
          <p className="text-sm sm:text-base text-white/50 leading-relaxed">
            Plan your upcoming wellness retreats, prepare travel essentials, and track your daily intentions seamlessly.
          </p>
        </div>

        {/* 3. Interactive To-Do List Maker */}
        <TodoList />
      </main>

      {/* 4. Shared Global Footer */}
      <Footer />
    </div>
  );
}
