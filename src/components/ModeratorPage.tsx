import type { Book } from "../types/types"
import { Cards } from "./Cards"

type ModeratorPageProps = {
    books: Book[]
    onChange: (index: number) => void
}

export function ModeratorPage({books, onChange}: ModeratorPageProps) {
    return(
        <>
        <div className="row">
            <div className="col-sm-3 d-flex align-items-center gap-2">
                <h2>Elérhetőség állítása</h2>
                <span className="badge bg-primary rounded-pill">{books.length} Könyv</span>
            </div>
        </div>
        {books.map((book,index) => (
            <div className="row" key={index}>
                <div className="col-sm-3">
                    <Cards
                        type='Moderátor'
                        onChange={()=> onChange(index)}
                        {...book}
                    />
                </div>
            </div>
        ))}
        </>
    )
}