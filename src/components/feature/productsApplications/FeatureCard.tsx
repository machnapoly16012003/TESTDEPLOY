function FeatureCard({ title, image }: { title: string; image: string }) {
  return (
    <div
      className='flex aspect-square items-end justify-center bg-contain object-center xs:w-[280px] xs:rounded-[22px] xs:py-[35px] sm:w-[280px] sm:py-[35px] md:w-[420px] md:rounded-[2rem] md:py-16'
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <span className='font-semibold text-white xs:text-[26px]/[28px] sm:text-[26px]/[28px] md:text-4xl'>{title}</span>
    </div>
  )
}

export default FeatureCard
