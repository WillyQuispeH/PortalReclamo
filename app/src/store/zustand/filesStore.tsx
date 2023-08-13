import { create } from "zustand";
import apiInstance from "@/utils/api";

type fileState = {
  fileList: any[];
  fileListLocal: any[];
  isLoading: boolean;
  isError: boolean;
  error: string;
  add: (file: any) => void;
  setAddFileLocal: (file: any) => void;
};

const initDataClaim = {
  id: "",
  typeclaim: "",
};

export const fileStore = create<fileState>((set, get) => ({
  fileList: [],
  fileListLocal: [],
  isLoading: false,
  isError: false,
  error: "",

  add: async (file: any) => {
    try {
      set((state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }));

      const { data } = await apiInstance.post("/file/add", file, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set((state) => ({
        ...state,
        fileList: data.data,
        isLoading: false,
        isError: false,
        error: "",
      }));
    } catch (e) {
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: (e as Error).message,
      }));
    }
  },
  setAddFileLocal: async (files: any) => {
    try {
      set((state) => ({
        ...state,
        fileListLocal: files,
        isLoading: false,
        isError: false,
        error: "",
      }));
    } catch (e) {
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: (e as Error).message,
      }));
    }
  },
}));
