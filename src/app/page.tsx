import Main from '@/app/_components/main'

export default async function Home() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <a
          href='https://tailwindcss.com/blog/tailwindcss-v4-alpha'
          className='text-cb-pink hover:text-cb-pink/75'
        >
          tailwind 4
        </a>
      </div>
    </Main>
  )
}
