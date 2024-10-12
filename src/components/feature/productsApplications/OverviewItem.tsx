function OverviewItem({ title, image }: { title: string; image: string }) {
  return (
    <li className='flex items-center gap-3'>
      <div className='flex size-11 shrink-0 items-center justify-center rounded-full bg-white/[0.64] shadow-s-37 backdrop-blur-[105px]'>
        <img src={image} alt='overview item image' className='size-6' />
      </div>
      <p className='text-[20px]/[32px] font-medium'>{title}</p>
    </li>
  )
}

export default OverviewItem
