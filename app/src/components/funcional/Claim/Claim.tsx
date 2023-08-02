import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Bar from "@/components/ui/Bar";
import { Option, Left, Central } from "@/components/layout/Option";
import { Overlay, Modal, ModalBody, ModalTitle } from "@/components/ui/Modal";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import { Column } from "@/components/layout/Generic";
import styles from "./Claim.module.scss";
import ComboBox from "@/components/ui/ComboBox";
import TexTarea from "@/components/ui/TexTarea";
import FileUpload from "@/components/ui/FileUpload";
import ButtonIcon from "@/components/ui/ButtonIcon";
import ScreenLoader from "@/components/layout/ScreenLoader";
import { useClaim, usePerson, useTypeClaim } from "@/store/hooks";

const Claim = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    type: { value: "", isValid: true },
    claim: { value: "", isValid: true },
  });
  const [isValidForm, setIsValidForm] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [modal, setModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const { isLoadingClaim, setDataClaim, body_claim, type_id } = useClaim();
  const { getAllTypeClaim, listTypeClaim } = useTypeClaim();
  const newData = [{ id: "", typename: "Seleccione" }, ...listTypeClaim];
  const { person } = usePerson();

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
  };

  const handleFilePreviewClick = (file: File) => {
    setModal(true);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleRemoveFile = (file: File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  useEffect(() => {
    if (type_id && body_claim) {
      setForm({
        type: { value: type_id || "", isValid: true },
        claim: { value: body_claim, isValid: true },
      });
    }
  }, [type_id, body_claim]);

  useEffect(() => {
    if (
      form.claim.value !== "" &&
      form.type.value !== "" &&
      form.claim.isValid &&
      form.type.isValid
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [form]);

  useEffect(() => {
    if (listTypeClaim) {
      getAllTypeClaim();
      console.log("getAll");
    }
  }, []);

  const handleOnchange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        isValid: e.target.value !== "" ? true : false,
      },
    });
  };

  const onclick = async () => {
    if (isValidForm && person.id !== "") {
      setDataClaim(form.claim.value, form.type.value);
      router.push("/send");
    }
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
          disabled={!isValidForm}
        >
          <Column gap="10px">
            <ComboBox
              value={form.type.value}
              onChange={handleOnchange}
              isValid={form.type.isValid ? "comboBox" : "unComboBox"}
              width="320px"
              label="Tipo de reclamo"
              data={newData}
              valueName="id"
              textName="typename"
              name="type"
            />
            <TexTarea
              label="Descripcion"
              isValid={form.claim.isValid ? "texTarea" : "unTexTarea"}
              onChange={handleOnchange}
              value={form.claim.value}
              name="claim"
              width="520px"
            />
          </Column>
          <div className={styles.claimcenter}>
            <div className={styles.fileClaim}>
              <FileUpload onFilesSelected={handleFilesSelected} />
              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={index}>
                    <span onClick={() => handleFilePreviewClick(file)}>
                      Ver
                    </span>
                    <p>{file.name}</p>
                    <span
                      className="material-symbols-outlined"
                      onClick={() => handleRemoveFile(file)}
                    >
                      delete
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Central>
        <div className={styles.claimRight}>
          <div className={styles.fileClaim}>
            <FileUpload onFilesSelected={handleFilesSelected} />
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  <span onClick={() => handleFilePreviewClick(file)}>Ver</span>
                  <p>{file.name}</p>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => handleRemoveFile(file)}
                  >
                    delete
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Option>

      <Bar type="bottom" />
      <Overlay active={modal}>
        <Modal>
          <ModalTitle>
            <ButtonIcon
              onClick={() => setModal(false)}
              typeButton="square"
              icon="close"
            />
          </ModalTitle>
          <ModalBody>
            <div className={styles.contenImg}>
              {previewImage && (
                <img width="100%" src={previewImage} alt="Preview" />
              )}
            </div>
          </ModalBody>
        </Modal>
      </Overlay>
      {isLoadingClaim && <ScreenLoader />}
    </>
  );
};

export default Claim;
