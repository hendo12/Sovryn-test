import React, { useState } from 'react';
import SendStep from './SendStep';
import ReviewStep from './ReviewStep';
import DetailsStep from './DetailsStep';

const RenderStep = ({ assetActive, setAssetActive, weenusBalance, rethBalance, walletEngaged, transactionStep, setTransactionStep, setWeenusBalance, setRethBalance }) => {
    const [assetAmountToSend, setAssetAmountToSend] = useState(0);
    const [targetWalletAddress, setTargetWalletAddress] = useState('');

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
                />
                : null
            }
        </div>
    )
}

export default RenderStep;