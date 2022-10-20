import styled from "styled-components";
import Header from "./Header";
const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      <Style>{Children}</Style>
    </>
  );
};

const Style = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

export default Layout;
