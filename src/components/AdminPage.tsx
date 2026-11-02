import type { ChangeEvent, FormEvent } from "react"
import type { Book } from "../types/types"
import { Cards } from "./Cards"

type AdminPageProps = {
    books: Book[],
    formData: Book,
    editingIndex: number | null
    onFieldChange: (event: ChangeEvent<HTMLInputElement>, field: keyof Book) => void,
    checkboxChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    onEdit: (index: number) => void
    onDelete: (index: number )=> void
    onCancelEdit: () => void
}

export function AdminPage({
    books,
    formData,
    editingIndex,
    onFieldChange,
    checkboxChange,
    onSubmit,
    onEdit,
    onDelete,
    onCancelEdit,
}: AdminPageProps) {
    return(
        <>
        <div className="row">
            <div className="col-sm-2 d-flex align-items-center gap-2">
                <h2>Modósítás</h2>
                <span className="badge bg-primary rounded-pill">{books.length} Könyv</span>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3">
                <form onSubmit={onSubmit} className="justify-content-center">
                    <div className="col-md-12">
                        <label htmlFor="title" className="form-label">Cím</label>
                        <input type="text"  id="title" name="title" value={formData.title} className="form-control" onChange={(event) => onFieldChange(event,"title")}/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="author" className="form-label">Szerző</label>
                        <input type="text"  id="author" name="author" value={formData.author} className="form-control" onChange={(event) => onFieldChange(event,"author")}/>
                    </div>
                    <div className="row mb-3 align-items-end">
                        <div className="col-7">
                            <label htmlFor="pages" className="form-label">Oldalak száma</label>
                            <input type="text"  id="pages" name="pages" value={formData.pages} className="form-control" onChange={(event) => onFieldChange(event,"pages")}/>
                        </div>
                        <div className="col-5">
                            <div className="form-check">
                                <input type="checkbox"  id="available" name="available" checked={formData.available} className="form-check-input" onChange={checkboxChange}/>
                                <label htmlFor="available" className="form-check-label">Elérhető</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-2 d-flex gap-2">
                    <button type="submit" className="btn btn-success">
                        {editingIndex !== null ? 'Mentés' : 'Hozzáadás'}
                    </button>
                    {editingIndex !== null && (
                        <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
                        Mégse
                        </button>
                    )}
                    </div>
                </form>
            </div>
        </div>
        {books.map((book,index) => (
            <div className="row" key={index}>
                <div className="col-sm-3">
                    <Cards
                        type="Admin"
                        onEdit={() => onEdit(index)}
                        onDelete={() => onDelete(index)}
                        {...book}
                    />
                </div>
            </div>
        ))}
        </>
    )
}