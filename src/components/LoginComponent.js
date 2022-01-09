import React from "react";

export default function HomeComponent({ onSubmit }) {
  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => onSubmit()}
      >
        Login
      </button>
    </div>
  );
}
