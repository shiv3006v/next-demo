import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

interface ptype{
  data:string
}
const contacts= (props:ptype) => {
  const {data}=props
  return (
    <div>contacts
      <p>{data}</p>
    </div>
  )
}

// interface IParams extends ParsedUrlQuery{
//   id:string
// }
export const getServerSideProps:GetServerSideProps=async (context)=>{
  // const {id}=context.params 
  console.log(context)
  return {
    props:{
      data:'abc'
    }
  }
}

export default contacts