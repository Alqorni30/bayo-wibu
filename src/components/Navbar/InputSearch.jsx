"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";


const InputSearch = () => {
  const inputRef = useRef();
  const router = useRouter()
  
  const handleSearch = (e) => {
    e.preventDefault()
    const keyword = inputRef.current.value
    router.push(`/search/${keyword}`)
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari Manga..."
        ref={inputRef}
        className="py-2 text-black px-4 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        className="absolute right-3 top-2/4 transform -translate-y-2/4 text-black focus:outline-none"
        onClick={handleSearch}
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default InputSearch;
