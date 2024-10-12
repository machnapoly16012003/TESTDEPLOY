function OverviewItem({ title, image }: { title: string; image: string }) {
  return (
    <li className='flex items-center gap-3'>
      <div className='shadow-sm flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.64]'>
        <img src={image} alt='overview item image' className='h-5 w-5' />
      </div>
      <p className='text-lg font-medium'>{title}</p>
    </li>
  )
}

export default OverviewItem
