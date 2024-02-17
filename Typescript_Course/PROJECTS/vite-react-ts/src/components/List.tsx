import React from 'react'


interface ListProps<T>{ 
    items: T[],
    render: (item: T) => React.ReactNode
}
const List = <T,>({items, render}: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, i) => (
            <li key={i}>{render(item)}</li>
        ))}
    </ul>
  )
}

export default List