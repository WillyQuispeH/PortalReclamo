import React, { useState } from "react";
import { useRouter } from "next/router";
import Bar from "@/components/ui/Bar";
import { Option, Left, Central, Right } from "@/components/layout/Option";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import { Column } from "@/components/layout/Generic";
import styles from "./Claim.module.scss";
import ComboBox from "@/components/ui/ComboBox";
import TexTarea from "@/components/ui/TexTarea";
import InputFile from "@/components/ui/InputFile";
const Claim = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    type: { value: "", isValid: true },
    claim: { value: "", isValid: true },
  });
  const inputDataShape = [
    {
      id: "1",
      value: "Opción 1",
    },
    {
      id: "2",
      value: "Opción 2",
    },
    {
      id: "3",
      value: "Opción 1",
    },
    {
      id: "4",
      value: "Opción 2",
    },
  ];
  const handleFileChange = async (archive: any) => {
    const formData = new FormData();
  };
  const handleOnchange = () => {};
  const onclick = () => {
    router.push("/send");
  };
  return (
    <>
      <Bar type="top" />
      <Option>
        <Left>
          <BreadCrumbs path={router.asPath} />
        </Left>
        <Central
          onClick={onclick}
          buttonTitle="Siguiente"
          title="Mi reclamo"
          disabled={false}
        >
          <Column gap="10px">
            <ComboBox
              width="240px"
              label="Tipo de reclamo"
              data={inputDataShape}
              valueName="id"
              textName="value"
            />
            <TexTarea
              label="Descripcion"
              onChange={handleOnchange}
              value={form.claim.value}
              name="claim"
              width="320px"
            />
          </Column>
          <div className={styles.claimcenter}>
            <InputFile
              text=""
              onFileChange={handleFileChange}
              loader={true}
              file=""
            />
          </div>
        </Central>
        <div className={styles.claimRight}>
          <InputFile
            text=""
            onFileChange={handleFileChange}
            loader={true}
            file=""
          />
        </div>
      </Option>

      <Bar type="bottom" />
    </>
  );
};

export default Claim;
