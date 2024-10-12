function RetailItem({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex items-center gap-3 text-2xl leading-relaxed'>
      <div className='size-[14px] rounded-[2px] border-[1.5px] border-[#0099FF]/[0.44]' />
      {children}
    </li>
  )
}

export default RetailItem
