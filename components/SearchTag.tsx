"use client";

import { getTag } from "@/actions/blog";
import {  useState } from "react";

const TagSearch = () => {
  const [searchTag, setSearchTag] = useState("");
  const [result, setResult] = useState<any>("");
  const [error, setError] = useState<any>("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Call the server-side action using fetch
      const res = await getTag(searchTag);
      if (!res) {
        throw new Error("Failed to fetch tag");
      }

      setResult(res);
      setError("");
    } catch (err) {
      setError(err);
      setResult(null);
    }
  };


  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          placeholder="Enter a tag"
        />
        <button type="submit">Search</button>
      </form>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {result && (
        <div>
          <h3>Tag found:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TagSearch;
