import React from 'react';

const Modal = ({ assetActive, setAssetActive, weenusBalance, rethBalance, walletEngaged, setAssetAmountToSend, assetAmountToSend }) => {
    let assetAmount;
    console.log(weenusBalance);

    if(assetActive === 'WEENUS') {
        assetAmount = weenusBalance;
    } else {
        assetAmount = rethBalance;
    }

    const onAssetClick = (e) => {
		e.preventDefault();
		console.log('asset clicked. event: ', e.target.id);
        if(e.target.id === 'WEENUS') {
            setAssetActive('WEENUS');
            setAssetAmountToSend(0);
        } else {
            setAssetActive('rETH');
            setAssetAmountToSend(0);
        }
	}

    const onPercentageClick = (e, divisor) => {
        e.preventDefault();

        const result = Math.round(assetAmount / divisor);
        setAssetAmountToSend(result);
    }

    const onSubmitClick = (e) => {
        e.preventDefault();
        console.log('submit clicked');
        const walletAddressEntered = true;

        if(assetAmountToSend !== 0 && walletAddressEntered && assetAmountToSend < assetAmount) {
            // move to next modal
            
        }
    }

    return (
        <form className="send flex flex-col justify-center">
                <h1 className="text-center pb-4">SEND</h1>
                <div className="py-4">
                    <label>Asset:</label>
                    <div className="flex justify-around assets">
                        <button 
                            className={`rEth font-semibold ${assetActive === 'rETH' ? "active" : "inactive"}`}
                            onClick={onAssetClick}
                            id="rETH"
                        >
                            rETH
                        </button>
                        <button 
                            className={`weenus font-semibold ${assetActive === 'WEENUS' ? "active" : "inactive"}`}
                            onClick={onAssetClick}
                            id="WEENUS"
                        >
                            WEENUS
                        </button>
                    </div>
                    <span className="text-xs font-normal">Available Balance: {walletEngaged ? assetAmount : 'Engage wallet to see balance'} {walletEngaged ? assetActive : ''}</span>
                </div>
                <div className="py-4 amountSection">
                    <label className="">Amount:</label>
                    <input 
                        className="py-2 rounded-md text-md font-semibold text-black text-center" 
                        id="amountToSend" 
                        value={assetAmountToSend} 
                    />
                    <span className="amountAsset">{assetActive}</span>
                    <div className="percentages py-3 text-sm">
                        <button 
                            onClick={(e) => onPercentageClick(e, 10)}
                            className="border rounded-l-md p-1"
                        >
                            10%
                        </button>
                        <button 
                            onClick={(e) => onPercentageClick(e, 4)}
                            className="border p-1"
                        >
                            25%
                        </button>
                        <button 
                            onClick={(e) => onPercentageClick(e, 2)}
                            className="border p-1"
                        >
                            50%
                        </button>
                        <button 
                            onClick={(e) => onPercentageClick(e, 1.3333333333)}
                            className="border p-1"
                        >
                            75%
                        </button>
                        <button 
                            onClick={(e) => onPercentageClick(e, 1)}
                            className="border rounded-r-md p-1"
                        >
                            100%
                        </button>
                    </div>
                </div>
                <div className="pb-6">
                    <label>Send To:</label>
                    <input 
                        className="py-2 rounded-md text-center text-md font-semibold text-black" 
                        placeholder="Type or Paste address"
                    />
                </div>
                <button className="cta button mx-auto text-xl" onClick={onSubmitClick}>SUBMIT</button>
            </form>
    )
}

export default Modal;