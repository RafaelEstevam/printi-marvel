import ReactLoading from "react-loading";
import { theme } from "../../styles/theme";
import { LoadingWrapper } from "./loading.style";

interface LoadingProps {
  loading: boolean;
}

const Loading = ({ loading }: LoadingProps) => {
  return loading ? (
    <LoadingWrapper>
      <ReactLoading
        type={"spin"}
        color={theme.colors.white}
        height={100}
        width={100}
      />
    </LoadingWrapper>
  ) : (
    <></>
  );
};

export default Loading;
