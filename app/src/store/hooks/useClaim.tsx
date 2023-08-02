import { claimStore } from "../zustand";

const useClaim = () => {
  const {
    claim,
    type_id,
    body_claim,
    isLoading: isLoadingClaim,
    isError: isErrorClaim,
    error: errorClaim,
  } = claimStore((state) => ({
    claim: state.claim,
    type_id: state.type_id,
    body_claim: state.body_claim,
    isLoading: state.isLoading,
    isError: state.isError,
    error: state.error,
  }));

  const { create: createClaim, setDataClaim } = claimStore();

  return {
    claim,
    type_id,
    body_claim,
    isLoadingClaim,
    isErrorClaim,
    errorClaim,
    createClaim,
    setDataClaim,
  };
};

export default useClaim;
