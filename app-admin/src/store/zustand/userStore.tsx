import { create } from "zustand";
import apiInstance from "@/util/api";
import { IUser } from "@/interfaces/user";

type userState = {
  user: IUser;
  list: IUser[];
  isLoading: boolean;
  isError: boolean;
  error: string;
  validate: (email: string, password: string) => void;
  recoveryPassword: (email: string) => void;
};

const initData = {
  id: "",
  rut: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  district: "",
  person_id: "",
  apartament: "",
  maternalLastName: "",
  paternalLastName: "",
};
export const userStore = create<userState>((set, get) => ({
  user: initData,
  list: [],
  isLoading: false,
  isError: false,
  error: "",

  validate: async (email: string, password: string) => {
    try {
      set((state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }));

      const { data } = await apiInstance.post("/user/validate", {
        email,
        password,
      });
      set((state) => ({
        ...state,
        user: data.data,
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

  recoveryPassword: async (email: string) => {
    try {
      set((state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }));

      const { data } = await apiInstance.post("/user/recoveryPassword", {
        email,
      });

      set((state) => ({
        ...state,
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
