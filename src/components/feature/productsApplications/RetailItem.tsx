function RetailItem({ children }: { children: React.ReactNode }) {
  return (
    <li className='xs:text-text-[14px]/[26px] sm:text-text-[14px]/[26px] flex items-start gap-3 leading-relaxed md:text-[22px]/[32px] lg:text-[22px]/[32px] xl:text-2xl'>
      <div className='flex-shrink-0 rounded-[2px] border-[1.5px] border-[#0099FF]/[0.44] xs:mt-[6px] xs:size-[12px] sm:mt-[6px] sm:size-[12px] md:mt-[9px] md:size-[14px] lg:mt-[8px] lg:size-[14px] xl:mt-[9px] xl:size-[14px]' />
      {children}
    </li>
  )
}

export default RetailItem
