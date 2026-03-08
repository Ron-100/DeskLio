import type {ReactNode} from 'react'
 
interface Props {
    children: ReactNode;
    classname?:string;
}

function Container({children, classname=''}: Props) {

    return (
        <div className={`relative font-one w-full h-full bg-(--zd9-color) dark:bg-(--zdark-color) ${classname}`}>
            {children}
        </div>
    )
}

export default Container
