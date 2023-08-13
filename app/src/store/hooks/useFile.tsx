import { fileStore } from "../zustand";

const useClaim = () => {
  const {
    fileList,
    fileListLocal,
    isLoading: isLoadingFile,
    isError: isErrorFile,
    error: errorFile,
  } = fileStore((state) => ({
    fileListLocal:state.fileListLocal,
    fileList: state.fileList,
    isLoading: state.isLoading,
    isError: state.isError,
    error: state.error,
  }));

  const { add: addFile , setAddFileLocal} = fileStore();

  return {
    fileList,
    fileListLocal,
    isLoadingFile,
    isErrorFile,
    errorFile,
    addFile,
    setAddFileLocal
  };
};

export default useClaim;
