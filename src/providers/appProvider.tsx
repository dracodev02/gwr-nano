import React from "react";
import { LanguagesProvider } from "./languagesProvider";

const AppProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <LanguagesProvider>{children}</LanguagesProvider>;
};

export default AppProvider;
