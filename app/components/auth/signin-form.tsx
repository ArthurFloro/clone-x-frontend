"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";

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
      <Input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <button onClick={handleEnterButton}>Entrar</button>
    </>
  );
};
