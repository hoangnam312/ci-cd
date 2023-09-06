import React from 'react'

const PropsKey = () => {
  return (
    <div>
      PropsKey
      <ParentComponent />  
    </div>
  )
}


const listPersonalInformation = [
  {
    id: 1,
    name: 'Trần Thanh A',
    age: 18,
    phone: '083557621',
    address: 'Mỹ Đình, Nam Từ Liêm'
  },
  {
    id: 2,
    name: 'Hoàng Hữu Thắng',
    age: 21,
    phone: '055557621',
    address: 'Bắc Từ Liêm'
  },
  {
    id: 3,
    name: 'Nguyễn Văn Phong',
    age: 22,
    phone: '093056322',
    address: 'Thạch thất'
  }
];

const ParentComponent = () => {
  return (
    <div>
      <h3>ParentComponent</h3>

      {listPersonalInformation.map((elm, index) => (
        <ChildrenComponent
          key={index}
          name={elm.name}
          age={elm.age}
          phone={elm.phone}
          address={elm.address}
        />
      ))}
    </div>
  )
}

const ChildrenComponent = (props) => {

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




export default PropsKey;