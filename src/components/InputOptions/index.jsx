import { Container, Select } from "./styles";

export function InputOptions(){
  return(
    <Container>
      
    <label htmlFor="dish-options">
    <Select id="dish-options">
      <option value="meal">Refeição</option>
      <option value="dessert">Sobremesa</option>
      <option value="drinks">Bebidas</option>
    </Select>
    </label>

    </Container>
  )
}