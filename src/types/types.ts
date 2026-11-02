export type Page = "Kezdőlap" | "Admin" | "Moderátor";

export type Book = {
    title: string,
    author: string,
    pages: number,
    available: boolean
}
