export default function ContentLayout({ children }: { children: React.ReactNode }) {
    return (
        <section id="content-layout" className="flex flex-col items-center xs:mt-10">
            {children}
        </section>
    )
}