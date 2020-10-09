// accountInfo
// charInfo

type AccountInfo = {
    id: number,
    name: string,
    email?: string
}

const account: AccountInfo = {
    id: 123,
    name: "Ricardo"
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: "RcdLord",
    level: 8000
}

// Intersection dos objeto (E)
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: "Ricardo",
    nickname: "RcdLord",
    level: 8000
}