import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Container>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeImage src="https://cdn-icons-png.flaticon.com/512/84/84384.png"></HomeImage>
        </Button>
        <div>오늘의 일기</div>
      </Container>
    </main>
  );
};

export default Header;
const Container = styled.div`
  align-items: center;
  border: 2px solid rgb(9, 234, 178);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  gap: 20px;
`;

const Button = styled.button`
  border: 0px;
`;

const HomeImage = styled.img`
  width: 40px;
`;
