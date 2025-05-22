import { GiFireDash } from "react-icons/gi";
import { FaRegHeart, FaEthereum, FaLongArrowAltRight } from "react-icons/fa";

const mockTrendingNFTs = [
  {
    id: 1,
    avatar:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar01.png",
    username: "King Crypto",
    handle: "@Jon Max",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img04.jpg",
    lastBid: "1.002",
  },
  {
    id: 2,
    avatar:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar02.png",
    username: "Crypto Queen",
    handle: "@Luna",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img06.jpg",
    lastBid: "0.859",
  },
  {
    id: 3,
    avatar:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar03.png",
    username: "Pixel Master",
    handle: "@PixlArt",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img02.jpg",
    lastBid: "2.430",
  },
  {
    id: 4,
    avatar:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar01.png",
    username: "King Crypto",
    handle: "@Jon Max",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img04.jpg",
    lastBid: "1.002",
  },
];

const TopTrending = () => {
  return (
    <div className="px-4 flex flex-col gap-6">
      <div className="flex gap-2 items-center justify-center">
        <h1 className="text-5xl font-extrabold font-geistMono">TOP TRENDING</h1>
        <GiFireDash className="text-black text-5xl" />
      </div>
      <div className="flex gap-4 ">
        {mockTrendingNFTs.map((nft) => (
          <div
            key={nft.id}
            className="w-full md:w-1/4 p-4 flex flex-col gap-4 border rounded-xl bg-[#182029] text-white cut-corner-br"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src={nft.avatar}
                  alt={nft.username}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold">{nft.username}</h1>
                  <p className="text-sm font-medium">{nft.handle}</p>
                </div>
              </div>
              <FaRegHeart className="text-xl" />
            </div>

            <img
              src={nft.image}
              alt=""
              className="rounded-xl h-[200px] object-cover"
            />

            <div className="w-9/12 h-[1px] mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

            <div className="w-10/12 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-sm">Last Bid</p>
                <div className="flex gap-1 items-center">
                  <FaEthereum className="text-yellow-300 text-base" />
                  <p className="font-bold">
                    {nft.lastBid} <span className="text-yellow-300">ETH</span>
                  </p>
                </div>
              </div>
              <button className="btn flex gap-2 items-center p-2 px-4 bg-yellow-300 rounded-md text-black font-bold">
                Bid <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrending;
