function FeatureCard({ title, image }: { title: string; image: string }) {
  return (
    <div
      className='flex aspect-square w-[420px] items-end justify-center rounded-[2rem] py-16'
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <span className='text-4xl font-semibold text-white'>{title}</span>
    </div>
  )
}

export default FeatureCard
