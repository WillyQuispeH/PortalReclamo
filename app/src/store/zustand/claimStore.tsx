import { create } from "zustand";
import apiInstance from "@/utils/api";

type claimState = {
  claim: any;
  type_id: string;
  body_claim: string;
  isLoading: boolean;
  isError: boolean;
  error: string;
  create: (person_id: string, body_claim: string, type_id: string) => void;
  setDataClaim: (body_claim: string, type_id: string) => void;
};

const initDataClaim = {
  id: "",
  person_id: "",
  body_claim: "",
  openingdate: "",
  endingdate: "",
  type_id: "",
};

export const claimStore = create<claimState>((set, get) => ({
  claim: initDataClaim,
  type_id: "",
  body_claim: "",
  isLoading: false,
  isError: false,
  error: "",

  create: async (person_id: string, body_claim: string, type_id: string) => {
    try {
      set((state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }));

      const { data } = await apiInstance.post("/claim/create", {
        person_id,
        body_claim,
        type_id,
      });

      set((state) => ({
        ...state,
        claim: data.data ? data.data : initDataClaim,
        isLoading: false,
        isError: false,
        error: "",
      }));
    } catch (e: any) {
      console.log(e);
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: e.response.data.error,
      }));
    }
  },
  setDataClaim: async (body_claim: string, type_id: string) => {
    try {
      set((state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }));

      set((state) => ({
        ...state,
        type_id: type_id,
        body_claim: body_claim,
        isLoading: false,
        isError: false,
        error: "",
      }));
    } catch (e: any) {
      console.log(e);
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: e.response.data.error,
      }));
    }
  },
}));
