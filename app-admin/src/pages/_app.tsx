import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Template from "@/components/layout/Template";
import { pdfjs } from "react-pdf";

import "@/styles/globals.css";
import Login from "@/components/funcional/Login";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const user = true;

  return user ? (
    <Template>
      <Component {...pageProps} />
    </Template>
  ) : (
    <Login />
  );
}
