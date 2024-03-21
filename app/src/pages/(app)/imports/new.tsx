import { useNavigate } from '~/lib/router'
import ImportForm from '~/components/imports/ImportForm'

const ImportsNew = () => {
  const navigate = useNavigate()

  return (
    <div>
      <ImportForm
        onSuccess={(importId) => {
          navigate('/imports/:id', { params: { id: importId } })
        }}
      />
    </div>
  )
}

export default ImportsNew
