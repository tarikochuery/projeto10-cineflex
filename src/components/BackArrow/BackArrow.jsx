import { StyledBackArrow } from "./style";
import { ArrowBackOutline } from 'react-ionicons'
import { useNavigate } from "react-router-dom";

export const BackArrow = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <StyledBackArrow onClick={goBack}>
      <ArrowBackOutline 
        color={'#000000'}
        width={'100%'}
      />
    </StyledBackArrow>
  )
}