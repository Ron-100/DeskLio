type Props = {
    className?: string;
}

function Logo({className=""}:Props) {
    return (
        <h1 className={`text-2xl font-semibold text-(--zd5-color) tracking-tight ${className}`}>
          Desk<span className="text-(--zd11-color) font-light">Lio</span>
        </h1>
    )
}

export default Logo
