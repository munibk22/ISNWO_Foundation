import React from 'react'
import CoinList from "../pages/CoinList"
import { WatchListContextProvider } from '../pages/WatchListContext'

export default function Banner() {
    return (
        <div className="crypto-banner width100 sub-banner ">
            {/* <WatchListContextProvider>
                    <CoinList />
                </WatchListContextProvider> */}
        </div>
    )
}
