import type { Book } from "../types/types"
import { Cards } from "./Cards"

type HomePageProps = {
    books: Book[]
}

export function MainPage({books}: HomePageProps) {
    return (
        <>
        <div className="row">
            <div className="col-sm-3 d-flex align-items-center gap-2">
                <h2>Könyvek listája</h2>
                <span className="badge bg-primary rounded-pill">{books.length} Könyv</span>
            </div>
        </div>
        {books.map((book,index) => (
            <div className="row" key={index}>
                <div className="col-sm-3">
                    <Cards
                        type="Kezdőlap"
                        {...book}
                    />
                </div>
            </div>
        ))}
        </>
    )
}