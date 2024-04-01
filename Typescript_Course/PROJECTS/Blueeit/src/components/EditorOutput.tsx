import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'

const Output = dynamic(() => import('editorjs-react-renderer'), {
  ssr: false, // This disables server-side rendering for the component
})

interface EditorPostProps {
  content: any
}

const style = {
  paragraph: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
}

const renderers = {
  // code: CustomCodeRenderers,
  image: CustomImageRenderers,
}
const EditorOutput = ({ content }: EditorPostProps) => {
  return <Output className='text-sm' renderers={renderers} style={style} data={content} />
}

function CustomCodeRenderers(props: any) {}

function CustomImageRenderers({ data }: any) {
  const src = data.file.url
  return (
    <div className='relative w-full min-h-[15rem]'>
      <Image alt='image' className='object-contain' fill src={src} />
    </div>
  )
}
export default EditorOutput
