
import { routes } from '@/utils/routes'
import Link from 'next/link'

export default function Home() {

  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col max-w-4xl pb-4 place-content-between h-full ml-[10%] mt-[15%]">

      <div className="flex flex-col">
        {/* Logo */}
        <div className="my-8"><img src="/logo.svg" className="max-w-[40px]" alt="Sebastian Bryers Logo"></img></div>

        {/* Description */}
        <div className="mb-8">
          <div className="mb-0 text-lg font-bold">Sebastian Bryers</div>
          <div className="mb-0 text-xs">Technologist, entrepreneur.</div>
        </div>
        
        {/* Navigation */}
        <div className="flex flex-col gap-4">
          {routes.map((route) => {
            return (
              <div className="flex flex-row" key={route.path}>
                <Link className="text-white" href={route.path}>{route.name}</Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="text-[10px]">Copyright © Sebastian Bryers, {year}</div>
      </div>
    </div>
  )
}
