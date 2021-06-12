import React from 'react';

const DetailsStep = ({ setTransactionStep, setTargetWalletAddress, setAssetAmountToSend, transactionHash }) => {
    const onCloseClick = () => {
        //update active asset balance
        setTargetWalletAddress('');
        setAssetAmountToSend(0);
        setTransactionStep('Send');
    }

    // const modalHeight = 400;
    // document.getElementById('Modal').setAttribute("style", `height: ${modalHeight}px`);

    return (
        <div className="details text-center">
            <h2 className="pb-6">Transaction Details</h2>
            <i className="font-normal text-lg">Status Pending</i>
            <p className="font-normal py-8">Tx Hash: <a className="txHash wrapAddress" href="/">{transactionHash}</a></p>
            <button className="engage button font-bold" onClick={onCloseClick}>CLOSE</button>
        </div>
    )
}

export default DetailsStep;