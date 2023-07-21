import React, { useState } from "react";

import { Column } from "../../layout/Generic";
import { useRouter } from "next/router";
import Screen from "../../layout/ScreenMain";
import InputText from "@/components/ui/InputText";
import Button from "@/components/ui/Button";
import { isValidEmail } from "@/util/validate";

const Login = () => {
  const inicialForm = {
    email: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
  };

  const router = useRouter();
  const [form, setForm] = useState(inicialForm);

  const handleOnChangePassWord = (e: any) => {
    setForm({
      ...form,
      password: {
        value: e.target.value,
        isValid: e.target.value !== "" ? true : false,
      },
    });
  };

  const handleOnchangeEmail = (e: any) => {
    setForm({
      ...form,
      email: {
        value: e.target.value,
        isValid: isValidEmail(e.target.value.trim()),
      },
    });
  };

  const handleOnclickLogin = async () => {
    try {
      router.push("/welcome");
    } catch (error: any) {
      console.error("error", error);
    }
  };

  return (
    <Screen>
      <Column gap="25px">
        <Column gap="5px">
          <InputText
            onChange={handleOnchangeEmail}
            value={form.email.value}
            type="text "
            label="Correo electrónico"
            width="260px"
            name="email"
            isValid={form.email.isValid ? "inputText" : "unInputText"}
          />
          <InputText
            value={form.password.value}
            name="password"
            type="password"
            label="Contraseña"
            width="260px"
            onChange={handleOnChangePassWord}
            isValid={form.password.isValid ? "inputText" : "unInputText"}
          />
        </Column>
        <Button
          onClick={handleOnclickLogin}
          valor={"Ingresar"}
          width="200px"
          height="40px"
        />
      </Column>
    </Screen>
  );
};

export default Login;
