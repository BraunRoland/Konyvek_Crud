import type { Book } from "../types/types";
import type { Page } from "../types/types";

type BookCardProps = Book & {
    type: Page
    onEdit?: () => void
    onDelete?: () => void
    onChange?: () => void
}

export function Cards({
    title,
    author,
    pages,
    available,
    type = 'Kezdőlap',
    onEdit,
    onDelete,
    onChange
}: BookCardProps) {
    return (
        <>
        <div className="card text-center">
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-text">Szerző: <strong>{author}</strong></div>
                <div className="card-text">Oldalak száma: <strong>{pages}</strong></div>
                <span className={`badge ${available? 'bg-success':'bg-danger'} rounded-pill`}>{available?'Elérhető': 'Elfogyott'}</span>
                {type == 'Admin' && (
                    <div>
                        <button type="button" className=" cardBtn btn btn-sm btn-warning" onClick={onEdit}>Modósítás</button>
                        <button type="button" className=" cardBtn btn btn-sm btn-danger" onClick={onDelete}>Törlés</button>
                    </div>
                )}
                {type == 'Moderátor' && (
                    <div>
                        <button type="button" onClick={onChange} className={`btn cardBtn ${available? "btn-outline-danger":"btn-outline-success"}`}>{available? "elfogyott":"elérhető"}</button>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}