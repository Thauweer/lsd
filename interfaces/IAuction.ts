import { AuctionItem, IAuctionItem } from "./IAuctionItem.ts";

export interface IAuction {
    items: IAuctionItem[]
    bank: number 
}

export class AuctionBank implements IAuction{
    constructor(public items: IAuctionItem[], public bank: number){
        this.items = items
        this.bank = 0
    }

    addToItem(id: number, value: number){
        this.items[id].weight += value
        this.#refreshTop()
    }

    push(name: string, weight:number){
        this.items.push(new AuctionItem(name, weight, this.items.length, `#${randomInteger(0,255).toString(16) + randomInteger(0,255).toString(16) + randomInteger(0,255).toString(16)}`, 0))
        this.#refresh()
    }

    remove(index:number){
        this.items.splice(index, 1)
        this.#refresh()
    }

    clear(){
        this.items.splice(0, this.items.length)
        this.#refresh()
    }

    #sort() {
        this.items = this.items.sort((first, second) => {
            return second.weight - first.weight
        })
    }

    #refreshBank() {
        this.bank = 0
        this.items.forEach((item) =>{
            this.bank += item.weight
        })
    }

    #refreshChanses() {
        this.items.forEach((item) => item.chance = item.weight / this.bank)
    }

    #refreshTop() {
        this.items.map((item, index) => item.id = index)
    }
    #refresh() {
        this.#sort()
        this.#refreshBank()
        this.#refreshChanses()
        this.#refreshTop()        
    }
}

function randomInteger(min: number, max:number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }