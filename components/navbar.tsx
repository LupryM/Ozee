"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b"
      style={{ backgroundColor: "#000000", borderColor: "#110C0A" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center h-auto gap-12">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="text-xs font-semibold tracking-widest transition-colors hover:opacity-80"
              style={{ color: "#8A7F66" }}
            >
              HOME
            </Link>
            <Link
              href="/photography"
              className="text-xs font-semibold tracking-widest transition-colors hover:opacity-80"
              style={{ color: "#8A7F66" }}
            >
              PHOTOGRAPHY
            </Link>
            <Link
              href="/about"
              className="text-xs font-semibold tracking-widest transition-colors hover:opacity-80"
              style={{ color: "#8A7F66" }}
            >
              ABOUT ME
            </Link>
            <Link
              href="/contact"
              className="text-xs font-semibold tracking-widest transition-colors hover:opacity-80"
              style={{ color: "#8A7F66" }}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "#8A7F66" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 text-center pb-4">
            <Link
              href="/"
              className="block text-xs font-semibold tracking-widest transition-colors hover:opacity-80 py-2"
              style={{ color: "#8A7F66" }}
            >
              HOME
            </Link>
            <Link
              href="/photography"
              className="block text-xs font-semibold tracking-widest transition-colors hover:opacity-80 py-2"
              style={{ color: "#8A7F66" }}
            >
              PHOTOGRAPHY
            </Link>
            <Link
              href="/about"
              className="block text-xs font-semibold tracking-widest transition-colors hover:opacity-80 py-2"
              style={{ color: "#8A7F66" }}
            >
              ABOUT ME
            </Link>
            <Link
              href="/contact"
              className="block text-xs font-semibold tracking-widest transition-colors hover:opacity-80 py-2"
              style={{ color: "#8A7F66" }}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
