export function Button({ content, onClick, className, type, disabled }: { content: any, onClick?: any, className?: string, type?: string, disabled?: boolean }) {

    const styles = {
        primary: "inline-block bg-primary-500 text-primary-700 px-5 py-3 rounded-md font-bold transition-all hover:bg-primary-300 cursor-pointer",
        disabled: "inline-block bg-gray-300 text-gray-500 px-5 py-3 rounded-md font-bold transition-all hover:bg-gray-200 cursor-not-allowed pointer-events-none"
    } 
    
    const states = {
        loading: "Loading...",
        success: "Success!",
    }

    // Handle states
    if (disabled) { styles.primary = styles.disabled; }


    if (type === "input") {
        return (
            <input className={`${styles.primary} ${className || ""}`} type="submit" value={content} onClick={onClick}/>
        )
    } else {
        return (
            <button className={`${styles.primary} ${className || ""}`} onClick={onClick}>{content}</button>
        )
    }
    
}