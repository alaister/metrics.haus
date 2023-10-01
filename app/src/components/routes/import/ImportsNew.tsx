import { useNavigate } from '@tanstack/react-router'
import ImportForm from '~/components/imports/ImportForm'

const ImportsNew = () => {
  const navigate = useNavigate()

  console.log('in new')

  return (
    <div>
      asdasds
      <ImportForm
        onSuccess={(importId) => {
          navigate({
            to: '/imports/$importId',
            params: { importId },
          })
        }}
      />
    </div>
  )
}

export default ImportsNew
