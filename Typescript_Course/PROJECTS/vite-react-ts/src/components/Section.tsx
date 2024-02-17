import React from 'react'

type SectionProps = {
    title?: string,
    children: React.ReactNode
}
const Section =({children, title=  "My Section"}: SectionProps) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}

export default Section