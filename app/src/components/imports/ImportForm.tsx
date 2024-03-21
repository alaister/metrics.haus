import { Save } from 'lucide-react'
import { Button } from '~/components/ui/Button'
import { useToast } from '~/lib/hooks/use-toast'
import { useRef, useState, ChangeEvent, FormEvent } from 'react'
import { useAppSelector } from '~/stores'
import supabase from '~/lib/supabase'

export interface ImportFormProps {
  onSuccess?: (importId: string) => void
}

const ImportForm = ({ onSuccess }: ImportFormProps) => {
  const { toast } = useToast()
  const selectedTeamId = useAppSelector((state) => state.team.selectedTeamId)

  const uploadButtonRef = useRef<HTMLInputElement>(null)

  const [uploadedFile, setUploadedFile] = useState<File>()

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const reader = new FileReader()
    if (file) {
      setUploadedFile(file)
      reader.readAsDataURL(file)
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)

    try {
      e.preventDefault()
      if (uploadedFile) {
        const extension = uploadedFile.name.split('.').pop()
        const nowStr = new Date().getTime().toString()
        const path = `${selectedTeamId}/${nowStr}.${extension}`
        const { error } = await supabase.storage
          .from('imports')
          .upload(path, uploadedFile)
        if (error) {
          toast({
            title: 'Error uploading file: ' + error.message,
            variant: 'destructive',
          })
          return
        }

        const { data: newImport, error: errorStartingImport } = await supabase
          .from('imports')
          .insert({
            team_id: selectedTeamId!,
            file_path: path,
            file_name: uploadedFile.name,
            file_type: `text/${extension}`,
          })
          .select('id')
          .single()

        if (errorStartingImport) {
          toast({
            title: 'Error initiating import: ' + errorStartingImport.message,
            variant: 'destructive',
          })
          return
        }

        onSuccess?.(newImport!.id!)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex items-center mb-4 space-x-8">
          <input
            ref={uploadButtonRef}
            type="file"
            onChange={uploadFile}
            className="hidden"
            accept="text/*"
            disabled={isSubmitting}
          />
          <button
            type="button"
            className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-600 border-gray-300 transition bg-white border rounded-md dark:bg-transparent dark:border-slate-500 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:border-slate-400 hover:text-gray-800 hover:border-gray-400"
            onClick={() => uploadButtonRef?.current?.click()}
            disabled={isSubmitting}
          >
            Select a file
          </button>
        </div>

        <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
          <Save className="w-4 h-4" />
          <span>Upload</span>
        </Button>
      </form>
    </div>
  )
}

export default ImportForm
