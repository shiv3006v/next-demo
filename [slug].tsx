import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { ParsedUrlQuery } from "querystring"

const Slug = (props:InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>{props.desc}</div>
  )
}
interface IParams extends ParsedUrlQuery {
    slug: string
}
export const getStaticProps:GetStaticProps=async (context)=>{
    const {slug}=context.params as IParams
    if(slug==='1')
    return {
        props:{
            desc:"this is first dynamic route"
        }
    }
    else if(slug==='2')
    return {
        props:{
            desc:"this is second dynamic route"
        }
    }
    return {
        props:{
            desc:"this is third dynamic route"
        }
    }
}

export const getStaticPaths:GetStaticPaths= async ()=>{
    return {
        paths:[
        {
            params:{slug:'1'}
        },
        {
            params:{slug:'2'}
        },
        {
            params:{slug:'3'}
        }
    ],
    fallback:false
}
 }


export default Slug