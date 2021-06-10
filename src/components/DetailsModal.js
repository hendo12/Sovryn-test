import React from 'react';

const DetailsModal = ({ setTransactionStep }) => {
    const onCloseClick = () => {
        //update active asset balance
        setTransactionStep('Send');
    }

    return (
        <div className="details text-center">
            <h2>Transaction Details</h2>
            <i>Status Pending</i>
            <p>Tx Hash: <a className="txHash" href="/">0x410x4338937459827345</a></p>
            <button className="engage button" onClick={onCloseClick}>CLOSE</button>
        </div>
    )
}

export default DetailsModal;