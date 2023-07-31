import { useEffect, useRef, useState } from 'react'

import ShortUniqueId from 'short-unique-id'
import { User } from 'types'
import { addComment } from 'features/product-feedback-app/productFeedbackSlice'
import { useAppDispatch } from 'app/hooks'

export const useAddComment = (productId: string) => {
  const [commentContent, setCommentContent] = useState('')
  const maxCharacters = 250
  const [charactersLeft, setCharactersLeft] = useState(maxCharacters)
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    setCharactersLeft(maxCharacters - commentContent.trim().length)
  }, [commentContent])

  useEffect(() => {

    if(inputRef.current){
        inputRef.current.focus()
    }
    
  }, [])

  const handleCommentSubmit = (user: User) => {
    if (charactersLeft === 0 || !commentContent.trim()) return

    const uuid = new ShortUniqueId({ length: 4 })

    const comment = {
      id: uuid(),
      content: commentContent,
      replies: [],
      user,
    }

    dispatch(addComment({ productId, comment }))
    setCommentContent('');
  };

  return { commentContent, setCommentContent, charactersLeft, handleCommentSubmit, inputRef };
}

