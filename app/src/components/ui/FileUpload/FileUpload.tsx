import React, { useState } from "react";
import styles from "./FileUpload.module.scss";

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
}

const FileUpload = ({ onFilesSelected }: FileUploaderProps) => {
  const handleFileChange = (e: any) => {
    if (e.target.files) {
      const files = Array.from(e.target.files) as File[];
      onFilesSelected(files);
    }
  };

  return (
    <div className={styles.inputFile}>
      <input
        type="file"
        id="fileUpload"
        name="file"
        accept=".png, .jpg, .jpeg"
        multiple
        onChange={handleFileChange}
      />
      <label htmlFor="fileUpload" id="fileUpload">
        <span className="material-symbols-outlined" id="iconUpload">
          cloud_upload
        </span>
        <p>Adjuntar evidencia</p>
      </label>
    </div>
  );
};

export default FileUpload;
