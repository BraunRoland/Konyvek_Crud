export type page = "Kezdőlap" | "Admin" | "Moderátor";

export type book = {
    title: string,
    author: string,
    pages: number,
    available: boolean
}