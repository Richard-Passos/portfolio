import { Animate } from '@/components'

const animationVariants = [
  {y: '10rem', opacity: 0}, 
    {y: '0rem', opacity: 1},
    {y: '-10rem', opacity: 0}
]

const Template = ({children, ...props}) => {
  return (
          <Animate variants={animationVariants} transition={{duration: .5}} {...props}>

    <main className='flex w-full max-w-bounds relative flex-col items-center'>{children}</main>
          </Animate>)
}

export default Template