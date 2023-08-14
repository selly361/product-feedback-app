import { BackButton, EditFeedBackForm } from 'components'

import { PageNotFound } from 'pages';
import { StyledEditFeedBack } from './EditFeedBack.styles'
import { useAppSelector } from 'app/hooks'
import { useParams } from "react-router-dom";

const EditFeedBackPage = () => {


  const { roadmap, suggestions } = useAppSelector(state => state)

  const { id } = useParams();

  const productToEdit = [...suggestions, ...roadmap].find((product) => product.id === id)

  if(id && !productToEdit) {
    return <PageNotFound />
  }

  return (
    <StyledEditFeedBack>
      <BackButton />
      <EditFeedBackForm />
    </StyledEditFeedBack>
  )
}

export default EditFeedBackPage