import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bar from "@/components/ui/Bar";
import { Option, Left, Central, Right } from "@/components/layout/Option";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import { Column } from "@/components/layout/Generic";
import styles from "./Send.module.scss";
import { Modal, Overlay, ModalTitle, ModalBody } from "@/components/ui/Modal";
import Message from "@/components/ui/Message";
import CheckBox from "@/components/ui/CheckBox";
import { useClaim, useFile, usePerson } from "@/store/hooks";
import MessageInfo from "@/components/ui/MessageInfo";
import ScreenLoader from "@/components/layout/ScreenLoader";
import CardSimple from "@/components/ui/CardSimple";
const Send = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const conditions = [
    {
      label: "Asegure la veracidad de la información en el reclamo.",
    },
    {
      label: " Asumir la responsabilidad legal correspondiente.",
    },
    {
      label: "Uso adecuado del portal reclamo",
    },
  ];

  const {
    createClaim,
    isLoadingClaim,
    isErrorClaim,
    errorClaim,
    type_id,
    body_claim,
  } = useClaim();
  const { fileList } = useFile();
  const { person } = usePerson();

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const onClick = () => {
    if (person.id !== "" && body_claim !== "" && type_id !== "") {
      createClaim(person.id, body_claim, type_id);
      setModal(true);
    }
  };

  const handleOnClickMessage = () => {
    setModal(false);
  };

  console.log(fileList);

  return (
    <>
      <Bar type="top" />
      <Option>
        <Left>
          <BreadCrumbs path={router.asPath} />
        </Left>
        <Central
          onClick={onClick}
          buttonTitle="Enviar"
          title="Enviar mi reclamo"
          disabled={isChecked}
        >
          <div className={styles.claimInfo}>
            <h1>
              {`Nombre: ${person.name} ${person.paternallastname} ${person.maternallastname}`}
              <span>Archivos({fileList.length})</span>
            </h1>
            <h1>{`Email: ${person.email}`}</h1>
            <h2>{`Mi reclamo: ${body_claim}`}</h2>
          </div>
          <div className={styles.sendCenter}>
            {conditions.map((item, key) => (
              <CardSimple key={key} text={item.label} />
            ))}
            <CheckBox onChange={handleCheckBoxChange} checked={isChecked} />
          </div>
        </Central>
        <div className={styles.sendRight}>
          {conditions.map((item, key) => (
            <CardSimple key={key} text={item.label} />
          ))}
          <CheckBox onChange={handleCheckBoxChange} checked={isChecked} />
        </div>
      </Option>

      <Bar type="bottom" />

      <Overlay active={modal}>
        <Modal>
          <ModalBody>
            <Message
              onClick={handleOnClickMessage}
              textButton="Terminar"
              title="¡Gracias por registrar su reclamo!"
            >
              <h1 className={styles.menssageFinal}>
                Apreciamos su retroalimentación y estamos trabajando
                diligentemente para resolver su inquietud. Mantendremos una
                comunicación abierta y le informaremos sobre cualquier avance.
                Por favor revisar su correo.
              </h1>
              <h2 className={styles.menssageFinal}>
                ¡Gracias por confiar en nosotros!
              </h2>
            </Message>
          </ModalBody>
        </Modal>
      </Overlay>
      {isLoadingClaim && <ScreenLoader />}
      {isErrorClaim && <MessageInfo type="error" msg={errorClaim} />}
    </>
  );
};

export default Send;
