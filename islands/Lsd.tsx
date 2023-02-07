import Layout from "../components/Layout.tsx"

type Props = {}

const Lsd = (props: Props) => {
    const handleClick = () => {
        window.location.href = 'https://discord.gg/3KntQcYy2z'
    }
    return (
        <Layout>
            <div class="flex justify-center items-center h-full bg-gradient-to-t from-red-700 via-blue-700 to-white-700">
                <div
                    class="flex text-purple-300 hover:text-purple-600 active:text-purple-800 visited:text-blue-600 cursor-pointer text-5xl img:w-24 sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl "
                    onClick={handleClick}>
                    <div class="flex flex-row items-center p-20 bg-gray-800 rounded-2xl">
                        <h1 class="animate-pulse">
                            LSD Server
                        </h1>
                        <img src="https://cdn.discordapp.com/icons/422325987481747457/913f45a38e006f83628577e669456c57.webp?size=480" alt="lsd" class="rounded-full inline ml-5 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Lsd