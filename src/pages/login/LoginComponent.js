import React from "react";

export default function HomeComponent({ onSubmit }) {
  return (
    <div>
      <form onSubmit={() => onSubmit()}>
        <input type="text" placeholder="Benutzername" />
        <input type="password" placeholder="Passwort" />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
