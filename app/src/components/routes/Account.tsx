import { Save } from 'lucide-react'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { getAvatarUrl } from '~/lib/avatars'
import supabase from '~/lib/supabase'
import { useAppSelector } from '~/stores'
import { Button } from '../ui/Button'
import { emitUserEvent } from '~/lib/userEvents'

const AccountPage = () => {
  const user = useAppSelector((state) => state.auth.user)
  const uploadButtonRef = useRef<HTMLInputElement>(null)

  const [uploadedFile, setUploadedFile] = useState<File>()
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    '',
  )

  useEffect(() => {
    if (!previewImage && user) {
      setPreviewImage(getAvatarUrl(user.user_metadata.avatar_path ?? null))
    }
  }, [previewImage, user])

  const uploadAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const reader = new FileReader()
    reader.addEventListener('load', () => setPreviewImage(reader.result))
    if (file) {
      setUploadedFile(file)
      reader.readAsDataURL(file)
      emitUserEvent('change_avatar')
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)

    try {
      e.preventDefault()
      if (uploadedFile && user) {
        const extension = uploadedFile.name.split('.').pop()
        const nowStr = new Date().getTime().toString()
        const path = `${user.id}/avatar-${nowStr}.${extension}`
        const { error } = await supabase.storage
          .from('avatars')
          .upload(path, uploadedFile, { cacheControl: `${60 * 60 * 24 * 365}` })
        if (error) {
          console.log('Error uploading file: ', error.message)
        }
      }

      await supabase.auth.refreshSession()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto space-y-8">
      <h1 className="text-4xl font-bold leading-none tracking-tight">
        Account
      </h1>
      <form onSubmit={onSubmit}>
        <p className="text-sm font-medium dark:text-white">Profile picture</p>
        <div className="flex items-center mb-4 space-x-8">
          <div
            className="w-24 h-24 bg-center bg-no-repeat bg-cover border rounded-full dark:border-slate-700"
            style={{
              backgroundImage: `url('${previewImage}')`,
            }}
          />
          <input
            ref={uploadButtonRef}
            type="file"
            onChange={uploadAvatar}
            className="hidden"
            accept="image/*"
            disabled={isSubmitting}
          />
          <button
            type="button"
            className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-600 border-gray-300 transition bg-white border rounded-md dark:bg-transparent dark:border-slate-500 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:border-slate-400 hover:text-gray-800 hover:border-gray-400"
            onClick={() => uploadButtonRef?.current?.click()}
            disabled={isSubmitting}
          >
            Select an image
          </button>
        </div>

        <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
          <Save className="w-4 h-4" />
          <span>Save changes</span>
        </Button>
      </form>
    </div>
  )
}

export default AccountPage
