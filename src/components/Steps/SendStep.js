import React from 'react';
import ethLogo from '../../assets/eth-diamond-rainbow.png';

const SendStep = ({ assetActive, setAssetActive, weenusBalance, rethBalance, walletEngaged, setAssetAmountToSend, assetAmountToSend, setTransactionStep, targetWalletAddress, setTargetWalletAddress}) => {
    let assetAmount;
    // const modalHeight = 575;
    // document.getElementById('Modal').setAttribute("style", `height: ${modalHeight}px`);

    if(assetActive === 'WEENUS') {
        assetAmount = weenusBalance;
    } else {
        assetAmount = rethBalance;
    }

    const walletAddressEntered = targetWalletAddress !== '';
    let submitActive = false;

    if (assetAmount > 0 && walletAddressEntered && assetAmountToSend <= assetAmount && assetAmount !== null) {
        submitActive = true;
    } else {
        submitActive = false;
    }

    const onAssetClick = (e) => {
		e.preventDefault();
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

        const result = Math.round((assetAmount / divisor) * 100) / 100;
        setAssetAmountToSend(result);
    }

    const onSubmitClick = (e) => {
        e.preventDefault();
        console.log('submit clicked');

        setTransactionStep('Review');
    }

    return (
        <form className="send flex flex-col justify-center">
                <h1 className="text-center pb-4">SEND</h1>
                <div className="py-4">
                    <label>Asset:</label>
                    <div className="flex justify-around assets">
                        <button 
                            className={`rEth font-semibold ${assetActive === 'rETH' ? "active" : "inactive"} flex items-center justify-center`}
                            onClick={onAssetClick}
                            id="rETH"
                        >
                            <img src={ethLogo} alt="eth logo" className="ethLogo mr-3" />
                            rETH
                        </button>
                        <button 
                            className={`weenus font-semibold ${assetActive === 'WEENUS' ? "active" : "inactive"} flex items-center justify-around`}
                            onClick={onAssetClick}
                            id="WEENUS"
                        >
                            <span className="mr-3">💪</span>
                            WEENUS
                        </button>
                    </div>
                    <span className="text-xs font-normal">Available Balance: {walletEngaged ? assetAmount : 'Engage wallet to connect to metamask'} {walletEngaged ? assetActive : ''}</span>
                </div>
                <div className="py-4 amountSection">
                    <label className="">Amount:</label>
                    <input 
                        className="py-2 rounded-md text-md font-semibold text-black text-center" 
                        id="amountToSend" 
                        value={assetAmountToSend}
                        onChange={(e) => setAssetAmountToSend(e.target.value)}
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
                        value={targetWalletAddress}
                        onChange={(e) => setTargetWalletAddress(e.target.value)}
                    />
                </div>
                <button className={`cta button mx-auto text-xl ${submitActive ? '' : 'disabled'}`} onClick={onSubmitClick}>SUBMIT</button>
            </form>
    )
}

export default SendStep;