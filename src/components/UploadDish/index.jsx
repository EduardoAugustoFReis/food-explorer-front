import { Container } from "./styles";

import { RiUpload2Line } from "react-icons/ri";

export function UploadDish( {...rest}){
  return(
    <Container {...rest}>
      <label htmlFor="avatar">
          <RiUpload2Line/>
          <input id="avatar" type="file"/>
          Selecionar arquivo
        </label>
    </Container>
  )
}