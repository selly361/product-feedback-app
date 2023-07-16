import { ArrowDownIcon, NewFeedbackIcon, SuggestionsIcon } from "icons"
import { Button, DropDown } from "components"
import {
  Container,
  SortButton,
  SortButtonContainer,
  StyledHeader,
} from "./Header.styles"
import { useRef, useState } from "react"

import { useAppSelector } from "app/hooks"
import { useClickOutside } from "hooks"
import { useNavigate } from "react-router-dom"

function Header() {
  const filteredSuggestions = useAppSelector((state) => state.filteredSuggestions)
  const sortPreference = useAppSelector((state) => state.filterConfig.sortPreference)
  const length = filteredSuggestions.length

  const [open, setOpen] = useState(false)
  const sortButtonRef = useRef<HTMLButtonElement | null>(null)

  useClickOutside(sortButtonRef, () => setOpen(false))

  const navigate = useNavigate()

  return (
    <StyledHeader>
      <Container>
        <Container>
          <SuggestionsIcon />
          <h3>
            {length} {length === 1 ? "Suggestion" : "Suggestions"}
          </h3>
        </Container>
        <SortButtonContainer>
          <h4>Sort by : </h4>
          <SortButton
            ref={sortButtonRef}
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {sortPreference} <ArrowDownIcon className={open ? "active" : ""} />
          </SortButton>
          {open && <DropDown />}
        </SortButtonContainer>
      </Container>
      <Button content="+ Add Feedback" buttonType={1} onClick={() => navigate("/add")} />
    </StyledHeader>
  )
}

export default Header
