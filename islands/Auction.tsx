import Layout from '../components/Layout.tsx'
import { AuctionBank } from '../interfaces/IAuction.ts'
import { useState } from 'preact/hooks'
import { AuctionItem } from '../interfaces/IAuctionItem.ts'
import Button from './Button.tsx'
import TableAuctionItems from './TableAuctionItems.tsx'
import Input from './Input.tsx'

type Props = {}

const Auction = (props: Props) => {
  const [auction, setAuction] = useState(new AuctionBank([], 0))
  const [name, setName] = useState("")
  const [weight, setWeight] = useState(0)
  const width = 600

  const refreshAuction = () => setAuction(auction => new AuctionBank(auction.items, 0))

  const onClickCreate = () => {
    if (name === "" || weight === 0 || isNaN(weight)) {
      return alert("Введите имя и стоимость(цифрами) варианта")
    }
    auction.push(name, weight)
    refreshAuction()
  }

  return (
    <Layout>
      <div class='bg-gray-800 h-full p-20 text-white flex flex-row justify-between'>
        <div>
          <div class="m-5 flex justify-between w-[600px]">
            <Input
              type="text"
              onChange={(e: InputEvent) => setName((e.target as HTMLInputElement).value)} placeholder='Название варианта' />
            <Input
              type="number"
              min={0}
              onChange={(e: InputEvent) => setWeight(parseFloat((e.target as HTMLInputElement).value))}
              placeholder='Стоимость' />
            <Button
              onClick={onClickCreate}>
              Добавить
            </Button>
          </div>
          <TableAuctionItems refreshAuction={refreshAuction} auction={auction} />
        </div>
        <svg style={{ "clip-path": "circle(40% at 50% 50%)" }} width={width} height={width} xmlns="http://www.w3.org/2000/svg" key={auction}>
          <g>
            <title>Layer 1</title>
            <ellipse stroke="#000" ry={width / 2} rx={width / 2} id="svg_3" cy={width / 2} cx={width / 2} fill="#fff" />
            {
              auction.items.map((item) => {
                <polygon
                  ref={ref => console.log(123)}
                  key={item.id}
                  style={{ 'border-top-left-radius': '9999px', 'border-top-right-radius': '9999px' }}
                  points="100,300 400,300 400,0 100,0" fill="#3f6" />
              })
            }
          </g>
        </svg>
      </div>
    </Layout>
  )
}

export default Auction