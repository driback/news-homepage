import Headers from "./components/Header";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Headers />
      <Main />
    </Wrapper>
  );
};

export default App;
