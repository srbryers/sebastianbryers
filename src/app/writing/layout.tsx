export default function WritingLayout({ children }: { children: React.ReactNode }) {
    return (
        <section id="writing-layout" className="flex flex-col">
            {children}
        </section>
    )
}