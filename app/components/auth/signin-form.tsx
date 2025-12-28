"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SigninForm = () => {
  const router = useRouter(); // para conseguir redirecionar o usuário após o login
  const [emailField, setEmailField] = useState(""); // para salvar o que o usuário digita
  const [passwordField, setPasswordField] = useState(""); // para salvar o que o usuário digita

  //redireciona o usuário para a página /home apos o login
  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(e) => setEmailField(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(e) => setPasswordField(e.target.value)}
      />

      <button onClick={handleEnterButton}>Entrar</button>
    </>
  );
};
