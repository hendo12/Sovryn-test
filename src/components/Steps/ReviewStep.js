import React from 'react';

const ReviewStep = ({ assetActive, setTransactionStep, assetAmountToSend, targetWalletAddress, walletAddress, sendEth }) => {
    const onConfirmClick = () => {
        sendEth();
    }

    // const modalHeight = 451;
    // document.getElementById('Modal').setAttribute("style", `height: ${modalHeight}px`);

    return (
        <div className="review text-center">
            <h2 className="py-2">Review Transaction</h2>
            <h3 className="font-semibold pt-8">SEND</h3>
            <h3 className="font-semibold">{assetAmountToSend} {assetActive}</h3>
            <p className="font-normal py-4">From: <span className="wrapAddress">{walletAddress}</span></p>
            <p className="font-normal py-4">To: <span className="wrapAddress">{targetWalletAddress}</span></p>
            <div className="flex justify-around py-4">
                <p className="font-normal">Tx Fee: </p>
                <p className="font-normal">0.0006 rBTC</p>
            </div>
            <button className="cta button mx-auto text-xl" onClick={onConfirmClick}>CONFIRM</button>
        </div>
    )
}

export default ReviewStep;