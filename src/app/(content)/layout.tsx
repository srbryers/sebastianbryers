import { Suspense } from 'react'
import { Loading } from '@/app/components'

export default function ContentLayout({ children }: { children: React.ReactNode }) {
    return (
        <section id="content-layout" className="flex flex-col items-center xs:mt-10">
            <Suspense fallback={<Loading className="mt-10"></Loading>}>
                {children}
            </Suspense>
        </section>
    )
}