import { ArrowDownIcon, CheckIcon } from "icons";
import { Container, Selected } from "./DropDown.styles";
import {
  Selector,
  StyledDropDown,
  SubContainer,
} from "components/shared/Styles/DropDown";
import { useRef, useState } from "react";

import { IDropDownProps } from "./DropDown.types";
import { dropDownOptions } from "consts";
import { useClickOutside } from "hooks";

function DropDown({ set, current, type }: IDropDownProps) {

  const containerRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const options = dropDownOptions[type];

  useClickOutside(containerRef, () => setOpen(false));

  return (
    <Container ref={containerRef} onClick={() => setOpen((e) => !e)}>
      <Selected>{current}</Selected>
      <ArrowDownIcon />
      <StyledDropDown>
        {open
          ? options.map((option) => (
              <SubContainer key={option.value} onClick={() => set(option.label)}>
                <Selector>{option.label}</Selector>
                {option.value === current.toLowerCase() ? <CheckIcon /> : null}
              </SubContainer>
            ))
          : null}
      </StyledDropDown>
    </Container>
  );
}

export default DropDown;
