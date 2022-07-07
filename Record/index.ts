/*
    Record<K, T>
    プロパティ・キーがKで、プロパティの値がTであるオブジェクトタイプを構築する
    ある型のプロパティを別の型にマッピングするために使用できる
 */

interface CatInfo {
    age: number
    breed: string
}

type CatName = "miffy" | "boris" | "mordred"

// CatNameをkeyに、CatInfoをvalueにできる
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
}

console.log(cats.boris)
// { age: 5, breed: "Maine Coon" }