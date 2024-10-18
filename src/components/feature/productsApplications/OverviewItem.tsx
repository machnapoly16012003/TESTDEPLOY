function OverviewItem({ title, image }: { title: string; image: string }) {
  return (
    <li className='flex items-center gap-3'>
      <div className='flex shrink-0 items-center justify-center rounded-full bg-white/[0.64] shadow-s-37 backdrop-blur-[105px] xs:size-[38px] sm:size-[38px] md:size-11 lg:size-10 xl:size-11'>
        <img src={image} alt='overview item image' className='xs:size-5 sm:size-5 md:size-5 lg:size-5 xl:size-6' />
      </div>
      <p className='font-medium xs:text-[14px]/[32px] sm:text-[14px]/[32px] md:text-[22px]/[34px] lg:text-[18px]/[30px] xl:text-[20px]/[32px]'>
        {title}
      </p>
    </li>
  )
}

export default OverviewItem
