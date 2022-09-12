import { FC } from "react";
import { Box, Header, Footer, Container } from "./";

type PropTypes = {
   children: JSX.Element;
};
export const Layout: FC<PropTypes> = ({ children }) => {
   return (
      <Container maxW="container.xl">
         <Header />
         {children}
         <Footer />
      </Container>
   );
};
