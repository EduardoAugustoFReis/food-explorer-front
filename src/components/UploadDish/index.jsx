import { Container } from "./styles";

import { RiUpload2Line } from "react-icons/ri";

export function UploadDish( {title, ...rest}){
  return(
    <Container {...rest}>
      <label htmlFor="avatar">
          <RiUpload2Line/>
          <input id="avatar" type="file"/>
           {title}
             Selecione imagem
        </label>
    </Container>
  )
}