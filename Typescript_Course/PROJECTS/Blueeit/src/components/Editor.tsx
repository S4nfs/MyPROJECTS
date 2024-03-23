'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostCreationRequest, PostValidator } from '@/lib/validators/post'
import type EditorJS from '@editorjs/editorjs'
import { uploadFiles } from '@/lib/uploadthing'
interface EditorProps {
  subredditId: string
}
const Editor = ({ subredditId }: EditorProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostCreationRequest>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      subredditId,
      title: '',
      content: null,
    },
  })
  const ref = useRef<EditorJS>()
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    const Header = (await import('@editorjs/header')).default
    const Embed = (await import('@editorjs/embed')).default
    const Table = (await import('@editorjs/table')).default
    const List = (await import('@editorjs/list')).default
    const Code = (await import('@editorjs/code')).default
    const LinkTool = (await import('@editorjs/link')).default
    const InlineCode = (await import('@editorjs/inline-code')).default
    const ImageTool = (await import('@editorjs/image')).default

    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady: () => {
          ref.current = editor
        },
        placeholder: 'Start writing...',
        inlineToolbar: true,
        data: {
          blocks: [],
        },
        tools: {
          header: Header,
          linktool: {
            class: LinkTool,
            config: {
              endpoint: '/api/link',
            },
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  const [res] = await uploadFiles([file], 'imageUploader')
                  return {
                    success: 1,
                    file: {
                      url: res.fileUrl,
                    },
                  }
                },
              },
            },
          },
          list: List,
          code: Code,
          InlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      })
    }
  }, [])

  useEffect(() => {
    const init = async () => {
      await initializeEditor()
      setTimeout(() => {
        //set focus to title
        // document.querySelector('#subreddit-post-form textarea')?.focus()
      })
    }
    if (isMounted) {
      init()
      return () => {
        ref.current?.destroy()
      }
    }
  }, [isMounted, initializeEditor])

  return (
    <div className='w-full p-4 bg-zinc-50 rounded-lg border border-zinc-200'>
      <form action='' id='subreddit-post-form' className='w-fit' onSubmit={() => {}}>
        <div className='prose prose-stone dark:prose-invert'>
          <TextareaAutosize className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none' placeholder='Title' />
          <div id='editor' className='min-h-[500px]'></div>
        </div>
      </form>
    </div>
  )
}

export default Editor
