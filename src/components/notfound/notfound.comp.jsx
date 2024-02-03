import { Message, MessageContainer, MessageConveyer } from "../../styles"

export const NotFoundComponent = () => {
  return (
    <MessageConveyer>
      <MessageContainer $theme='error'>
        <Message>
          Sorry, 404. The page you are looking for does not exist! &#128562;
        </Message>
      </MessageContainer>
    </MessageConveyer>
  )
}