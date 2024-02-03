import { useRouteError } from "react-router-dom"
import { Message, MessageContainer, MessageConveyer, MessageTitle } from "../../styles";

export const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    }}>
    <MessageConveyer>
      <MessageContainer $theme='error'>
        <MessageTitle>Oppsss... An error occured!!</MessageTitle>
        <Message>{error.message}</Message>
      </MessageContainer>
    </MessageConveyer>
    </div>
  )
}