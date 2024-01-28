import Image from 'next/image'
import imagenDev from '../../public/hero/develop-titan.png'

interface Props {
  containerStyles: string
}

const DevImg = ({containerStyles}:Props) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
      src={imagenDev}
       alt='img dev'
       className='rounded-full pl-5 ml-10'
       height={420}
       width={420}
      />
    </div>
  )
}

export default DevImg