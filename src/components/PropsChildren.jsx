import React from 'react'

const PropsChildren = () => {
  return (
    <div>
      PropsInside
      <ParentComponent />  
    </div>
  )
}

const ParentComponent = () => {
  return (
    <div>
      <h3>ParentComponent</h3>

      <ChildrenComponent>
        <p>Hello, I am children</p>
      </ChildrenComponent>
    </div>
  )
}

const ChildrenComponent = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}




export default PropsChildren;