import parse from 'html-react-parser'
import Image from 'next/image'

export default function ConvertBody(props) {
    const contentReact = parse(props.contentHTML,{
        replace:(node)=>{
            if(node.name == 'img'){
                const {src,alt,width,height} = node.attribs
                return(
                    <Image
                    layout='responsive'
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    sizes={"(min-width:768px),100vw"}
                    />
                )
            }
        }
    })
    return<>{contentReact}</>
    
}