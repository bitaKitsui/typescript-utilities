/*
    Exclude<T, U>
    TにUnion型を与え、そこからUに割り当て可能な全てのプロパティを
    除外して型を構築する
 */

type T0 = Exclude<"a" | "b" | "c", "a">

const t0: T0 = "b" // or "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

const t1: T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>

const t2: T2 = "string" // or 0