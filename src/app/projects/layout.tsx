export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section id="projects-layout" className="flex flex-col">
            {children}
        </section>
    )
}