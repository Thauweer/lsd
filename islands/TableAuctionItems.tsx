import { useState } from 'preact/hooks'
import { AuctionBank } from '../interfaces/IAuction.ts'
import Button from './Button.tsx'
import Input from './Input.tsx'

type Props = {
  auction: AuctionBank,
  refreshAuction: () => void
}

const TableAuctionItems = ({ auction, refreshAuction }: Props) => {
  const [fold, setFold] = useState(0)

  const addToItem = (id: number, value: number) => {
    auction.addToItem(id, value)
    refreshAuction()
  }
  return (
    <div class="w-[600px]">
      <table class='m-5 border-collapse w-full h-4/5'>
        <thead class='m-5 '>
          <tr >
            <td class='text-left bg-gray-300 text-gray-700 p-5'>Топ№</td>
            <td class='text-left bg-gray-300 text-gray-700 p-5'>Название</td>
            <td class='text-right bg-gray-300 text-gray-700 p-5'>Стоимость</td>
            <td class='bg-transparent w-[100px]'><Input style={{'width': '120px', 'padding':'2px 3px'}} type='number' placeholder='Прибавить' onChange={(e: InputEvent) => setFold(parseFloat((e.target as HTMLInputElement).value))}></Input></td>
          </tr>
        </thead>
        <tbody class='overflow-y-auto'>
          {auction.items.map((item) =>
            <tr class={`${item.id % 2 !== 0 ? 'bg-gray-700' : null}`} key={item.id} >
              <td class='text-left p-5'>{item.id + 1}</td>
              <td class='text-left p-5'>{item.name}</td>
              <td class='text-right p-5 align-center'>{item.weight}</td>
              <Button onClick={() => addToItem(item.id, -fold)}>-</Button>
              <Button onClick={() => addToItem(item.id, fold)}>+</Button>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}

export default TableAuctionItems