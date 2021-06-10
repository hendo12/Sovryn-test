import React, { useState } from 'react';
import SendModal from './SendModal';
import ReviewModal from './ReviewModal';
import DetailsModal from './DetailsModal';

const RenderModal = ({ assetActive, setAssetActive, weenusBalance, rethBalance, walletEngaged, transactionStep, setTransactionStep, setWeenusBalance, setRethBalance }) => {
    const [assetAmountToSend, setAssetAmountToSend] = useState(0);
    const [targetWalletAddress, setTargetWalletAddress] = useState('');

    return (
        <div className="Modal text-white font-bold pt-8 w-96">
            { transactionStep === 'Send' ? 
                <SendModal 
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
                <ReviewModal
                    assetActive={assetActive}
                    setTransactionStep={setTransactionStep}
                    assetAmountToSend={assetAmountToSend}
                />
                : null
            }
            { transactionStep === 'Details' ? 
                <DetailsModal 
                    setTransactionStep={setTransactionStep}
                    weenusBalance={weenusBalance}
                    rethBalance={rethBalance}
                    setWeenusBalance={setWeenusBalance}
                    setRethBalance={setRethBalance}
                />
                : null
            }
        </div>
    )
}

export default RenderModal;