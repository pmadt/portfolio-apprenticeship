export default function Divider() {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-5/6 border-t border-neutral-600 border-dashed" />
            </div>
        </div>
    )
}