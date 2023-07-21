import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bar from "@/components/ui/Bar";
import { Option, Left, Central, Right } from "@/components/layout/Option";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import { Column } from "@/components/layout/Generic";
import styles from "./Send.module.scss";
import { Modal, Overlay, ModalTitle, ModalBody } from "@/components/ui/Modal";
import ButtonIcon from "@/components/ui/ButtonIcon";
import Message from "@/components/ui/Message";
import CheckBox from "@/components/ui/CheckBox";
const Send = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const checkboxes = [
    {
      id: "uno",
      label: "Asegure la veracidad de la información en el reclamo.",
      back: "#4A4A4A",
      checked: false,
    },
    {
      id: "dos",
      label: " Asumir la responsabilidad legal correspondiente.",
      back: "#006FB3",
      checked: false,
    },
    {
      id: "tres",
      label: "Uso adecuado del portal reclamo",
      back: "#FE6565",
      checked: false,
    },
  ];
  const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);

  const handleAllCheckboxesChecked = (checked: any) => {
    setAllCheckboxesChecked(checked);
  };

  const onClick = () => {
    setModal(true);
  };
  const handleOnClickMessage = () => {
    setModal(false);
  };

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
          disabled={!allCheckboxesChecked}
        >
          <h1 className={styles.claimInfo}></h1>
          <div className={styles.sendCenter}>
          <Column gap="30px">
            <CheckBox
              checkboxes={checkboxes}
              onAllCheckboxesChecked={handleAllCheckboxesChecked}
            />
          </Column>
        </div>
        </Central>
        <div className={styles.sendRight}>
          <Column gap="30px">
            <CheckBox
              checkboxes={checkboxes}
              onAllCheckboxesChecked={handleAllCheckboxesChecked}
            />
          </Column>
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
    </>
  );
};

export default Send;
