import {
  Amount,
  BottomSection,
  Container,
  Dot,
  MiddleSection,
  StyledAside,
  StyledButton,
  StyledLink,
  SubContainer,
  TopSection,
} from "./SideBar.styles";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { UserProfile } from "components";
import { buttonCategories } from "constantParameters";
import { filterCategory } from "features/product-feedback-app/productFeedbackSlice";

function SideBar() {
  const category = useAppSelector((state) => state.filterConfig.category);

  const className = (arg: string) => (category === arg ? "active" : "");

  const dispatch = useAppDispatch();

  
  const roadmap = useAppSelector(state => state.roadmap)

  const plannedLength = roadmap.filter(product => product.status === "planned").length
  const liveLength = roadmap.filter(product => product.status === "live").length
  const inProgressLength = roadmap.filter(product => product.status === "in-progress").length

  return (
    <StyledAside>
      <TopSection>
        <UserProfile />
        <h2>Frontend Mentor</h2>
        <h6>Feedback Board</h6>
      </TopSection>
      <MiddleSection>
        {buttonCategories.map((button) => (
          <StyledButton
            key={button.category}
            className={className(button.category)}
            onClick={() => dispatch(filterCategory(button.category))}
          >
            {button.label}
          </StyledButton>
        ))}
      </MiddleSection>
      <BottomSection>
        <Container>
          <SubContainer>
            <h3>Roadmap</h3>
            <StyledLink to="/roadmap">View</StyledLink>
          </SubContainer>
          <SubContainer>
            <div>
              <Dot type="planned" />
              <h5>Planned</h5>
            </div>

            <Amount>{plannedLength}</Amount>
          </SubContainer>
          <SubContainer>
            <div>
              <Dot type="in-progress" />
              <h5>In-Progress</h5>
            </div>

            <Amount>{inProgressLength}</Amount>
          </SubContainer>
          <SubContainer>
            <div>
              <Dot type="live" />
              <h5>Live</h5>
            </div>
            <Amount>{liveLength}</Amount>
          </SubContainer>
        </Container>
      </BottomSection>
    </StyledAside>
  );
}

export default SideBar;
