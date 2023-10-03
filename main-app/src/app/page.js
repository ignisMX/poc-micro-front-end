"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
export default function Home({}) {
  const [userAccount, setUserAccount] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserAccount({
      ...userAccount,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      username: userAccount.username,
      password: userAccount.password,
      redirect: false,
    });
    if (result.ok) {
      router.push("dashboard");
    } else {
    }
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Nombre de usuario </label>
          <input
            type="text"
            name="username"
            value={userAccount.username}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Contraseña </label>
          <input
            type="password"
            name="password"
            value={userAccount.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </main>
  );
}
