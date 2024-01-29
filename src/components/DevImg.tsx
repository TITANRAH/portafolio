import Image, { StaticImageData } from 'next/image'


interface Props {
  containerStyles: string
  imgUrl: StaticImageData
}

const DevImg = ({containerStyles, imgUrl}:Props) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
       src={imgUrl}
       alt='img dev'
       className='rounded-full pl-5 ml-14'
       height={420}
       width={420}
      />
    </div>
  )
}

export default DevImg