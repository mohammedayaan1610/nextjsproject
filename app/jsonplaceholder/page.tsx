"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JsonPlaceholderUserCard from "@/components/JsonPlaceholderPost";
import { JsonPlaceholderUser } from "@/types/jsonPlaceholder";

export default function JsonPlaceholderPage() {
  const [users, setUsers] = useState<JsonPlaceholderUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadUsers = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/users");

      if (!response.ok) {
        throw new Error(`Failed to load users (${response.status}).`);
      }

      const data: JsonPlaceholderUser[] = await response.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load users right now.";
      setErrorMessage(message);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#091b20] text-white selection:bg-[#fb9826] selection:text-[#091b20]">
      <Navbar />

      <main className="flex-1 w-full pt-[110px] pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/60 text-xs tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fb9826]" />
            JSONPlaceholder Data
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-white mb-3">
            JSONPlaceholder
          </h1>

          <p className="text-sm sm:text-base text-white/50 leading-relaxed">
            Browse the public JSONPlaceholder users API and inspect the returned nested data in a clean, responsive layout.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={loadUsers}
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-full bg-[#fb9826] px-6 py-3 text-sm font-semibold text-[#091b20] transition-colors hover:bg-[#fa8805] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Loading..." : "Load Users"}
            </button>

            {users.length > 0 && (
              <div className="text-sm text-white/60">
                <span className="text-[#fb9826] font-semibold">{users.length}</span> users loaded
              </div>
            )}
          </div>

          {errorMessage && (
            <div className="mb-6 rounded-2xl border border-rose-500/25 bg-rose-500/10 p-4 text-sm text-rose-200">
              <p className="font-medium">Unable to load users.</p>
              <p className="mt-1 text-rose-100/80">{errorMessage}</p>
              <button
                type="button"
                onClick={loadUsers}
                className="mt-3 rounded-full border border-rose-300/30 bg-transparent px-4 py-2 font-medium text-rose-100 transition-colors hover:bg-rose-500/10"
              >
                Try Again
              </button>
            </div>
          )}

          {!isLoading && users.length === 0 && !errorMessage && (
            <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center text-white/45">
              No users loaded yet. Click “Load Users” to fetch data from database.
            </div>
          )}

          {isLoading && (
            <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-sm text-white/65">
              Loading users from JSONPlaceholder...
            </div>
          )}

          {!isLoading && users.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {users.map((user) => (
                <JsonPlaceholderUserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
