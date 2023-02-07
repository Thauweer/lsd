export interface IAuctionItem {
    id: number,
    name: string,
    weight: number,
    color: string,
    chance: number,
}

export class AuctionItem implements IAuctionItem {
    constructor(public name: string,public weight: number, public id: number, public color: string, public chance: number){
        this.id = id
        this.name = name
        this.weight = weight
        this.color = color
        this.chance = chance
    }
}