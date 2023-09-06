import React from 'react'

const PropsInside = () => {
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

      <ChildrenComponent
        name="Trần Thanh A"
        age={18}
        phone="083557621"
        address="Mỹ Đình, Nam Từ Liêm"
      />

    </div>
  )
}

const ChildrenComponent = (props) => {

  console.log('props', props);
  props = "nothing";


  return (
    <div>
      <h3>ChildrenComponent</h3>
      
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>phone: {props.phone}</p>
      <p>address: {props.address}</p>
    </div>
  )
}




export default PropsInside;