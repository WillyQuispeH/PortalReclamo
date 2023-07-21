import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bar from "@/components/ui/Bar";
import ContainerForm from "@/components/ui/ContainerForm";
import InputText from "@/components/ui/InputText";
import { serialize } from "v8";
import Button from "@/components/ui/Button";
import { Central, Left, Right, Option } from "@/components/layout/Option";
import { Column } from "@/components/layout/Generic";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import styles from "./User.module.scss";

const User = () => {
  const dataForm = {
    name: { value: "", isValid: true },
    paternalLastName: { value: "", isValid: true },
    maternalLastName: { value: "", isValid: true },
    phone: { value: "", isValid: true },
    email: { value: "", isValid: true },
  };
  const [form, setForm] = useState(dataForm);
  const [errorForm, setErrorForm] = useState(false);
  const [modal, setmodal] = useState(false);

  const router = useRouter();

  const handleOnchange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        isValid: e.target.value !== "" ? true : false,
      },
    });
  };
  const handleOnClick = () => {
    router.push("/claim");
  };

  useEffect(() => {
    if (
      form.name.value !== "" &&
      form.name.isValid &&
      form.paternalLastName.value !== "" &&
      form.paternalLastName.isValid &&
      form.maternalLastName.value !== "" &&
      form.maternalLastName.isValid &&
      form.email.value !== "" &&
      form.email.isValid &&
      form.phone.value !== "" &&
      form.phone.isValid
    ) {
      setErrorForm(true);
    } else {
      setErrorForm(false);
    }
  }, [form]);

  const handleOnClickModal = () => {
    setmodal(true);
  };

  return (
    <>
      <Bar type="top" />

      <Option>
        <Left>
          <BreadCrumbs path={router.asPath} />
        </Left>
        <Central
          onClick={handleOnClick}
          buttonTitle="Siguiente"
          title="Mis Datos"
          disabled={!errorForm}
        >
          <Column gap="20px">
            <Column gap="5px">
              <InputText
                type="text"
                onChange={handleOnchange}
                value={form.name.value}
                label="Nombres"
                name="name"
                width="300px"
                isValid={form.name.isValid ? "inputText" : "unInputText"}
              />
              <InputText
                type="text"
                onChange={handleOnchange}
                value={form.paternalLastName.value}
                label="Apellido paterno"
                name="paternalLastName"
                width="300px"
                isValid={
                  form.paternalLastName.isValid ? "inputText" : "unInputText"
                }
              />
              <InputText
                type="text"
                onChange={handleOnchange}
                value={form.maternalLastName.value}
                label="Apellido materno"
                name="maternalLastName"
                width="300px"
                isValid={
                  form.maternalLastName.isValid ? "inputText" : "unInputText"
                }
              />
              <InputText
                type="text"
                onChange={handleOnchange}
                value={form.email.value}
                label="Correo electrónico"
                name="email"
                width="300px"
                isValid={form.email.isValid ? "inputText" : "unInputText"}
              />
              <InputText
                type="text"
                onChange={handleOnchange}
                value={form.phone.value}
                label="Teléfono"
                name="phone"
                width="300px"
                isValid={form.phone.isValid ? "inputText" : "unInputText"}
              />
            </Column>
          </Column>
        </Central>
        <div className={styles.userRight}>
          <Column gap="30px">
            <h1 className={styles.titleUser}>Portal reclamo</h1>
            <h2 className={styles.infoUser}>
              Gracias por considerar nuestro portal de reclamos para expresar su
              inquietud. Valoramos su confianza y estamos aquí para ayudarle en
              cualquier asunto que desee plantear.
            </h2>
          </Column>
        </div>
      </Option>

      <Bar type="bottom" />
    </>
  );
};

export default User;
