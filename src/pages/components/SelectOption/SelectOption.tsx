import type { FC } from  "react";
import type { SelectData } from "../../../types";
import { Wrapper, Label, Select, Option } from './style';

const SelectOption: FC<{ selectType: string, data: SelectData }> = (props) => {
  return (
    <Wrapper>
      <Label>{props.selectType}:</Label>
      <Select>
        {props.data.map((item) => {
          return <Option key={item.id} value={item.id}>{item.text}</Option>
        })}
      </Select>
    </Wrapper>
  )
}

export default SelectOption