import React from "react";
import * as S from "./page.styles";

const Page: React.FunctionComponent = ({ children }) => {
  return <S.PageContainer>{children}</S.PageContainer>;
};

export default Page;
