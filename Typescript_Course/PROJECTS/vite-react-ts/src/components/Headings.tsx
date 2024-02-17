import { ReactElement } from 'react'

type HeadingProps = {
    title: string
}

const Headings = ({title}: HeadingProps): ReactElement=> {
  return (
    <h1>{title}</h1>
  )
}

export default Headings