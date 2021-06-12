import React from 'react';
import SendStep from './Steps/SendStep';
import ReviewStep from './Steps/ReviewStep';
import DetailsStep from './Steps/DetailsStep';

const RenderStep = ({ assetActive, setAssetActive, weenusBalance, rethBalance, walletEngaged, transactionStep, setTransactionStep, setWeenusBalance, setRethBalance, walletAddress, assetAmountToSend, setAssetAmountToSend, targetWalletAddress, setTargetWalletAddress, sendEth, transactionHash, setTransactionHash }) => {

    return (
        <div className="Modal text-white font-bold pt-8 w-96" id="Modal">
            { transactionStep === 'Send' ? 
                <SendStep 
                    assetActive={assetActive} 
                    setAssetActive={setAssetActive} 
                    weenusBalance={weenusBalance} 
                    rethBalance={rethBalance}
                    walletEngaged={walletEngaged}
                    setAssetAmountToSend={setAssetAmountToSend}
                    assetAmountToSend={assetAmountToSend}
                    setTransactionStep={setTransactionStep}
                    targetWalletAddress={targetWalletAddress}
                    setTargetWalletAddress={setTargetWalletAddress}
                />
                : null
            }
            { transactionStep === 'Review' ? 
                <ReviewStep
                    assetActive={assetActive}
                    setTransactionStep={setTransactionStep}
                    assetAmountToSend={assetAmountToSend}
                    targetWalletAddress={targetWalletAddress}
                    walletAddress={walletAddress}
                    sendEth={sendEth}
                />
                : null
            }
            { transactionStep === 'Details' ? 
                <DetailsStep 
                    setTransactionStep={setTransactionStep}
                    weenusBalance={weenusBalance}
                    rethBalance={rethBalance}
                    setWeenusBalance={setWeenusBalance}
                    setRethBalance={setRethBalance}
                    setTargetWalletAddress={setTargetWalletAddress}
                    setAssetAmountToSend={setAssetAmountToSend}
                    transactionHash={transactionHash}
                    setTransactionHash={setTransactionHash}
                />
                : null
            }
        </div>
    )
}

export default RenderStep;