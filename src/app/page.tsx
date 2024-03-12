import Main from '@/app/_components/main'

export default async function Home() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex grow flex-col items-center justify-center space-y-4'>
        <a
          href='https://tailwindcss.com/blog/tailwindcss-v4-alpha'
          className='text-cb-pink hover:text-cb-pink/75'
        >
          tailwind 4
        </a><a
          href='https://github.com/tailwindlabs/tailwindcss/blob/next/packages/tailwindcss/theme.css'
          className='text-cb-pink hover:text-cb-pink/75'
        >
          theme.css
        </a>
      </div>
    </Main>
  )
}
