import React, { useState } from 'react';
import logo from './assets/sovryn-logo-white.svg';
import WalletBtn from './components/WalletBtn';
import RenderStep from './components/RenderStep';

const App = () => {
	const [walletEngaged, setWalletEngaged] = useState(false);
	const [weenusBalance, setWeenusBalance] = useState(20000.00);
	const [rethBalance, setRethBalance] = useState(32.00);
	const [assetActive, setAssetActive] = useState('WEENUS');
	const [transactionStep, setTransactionStep] = useState('Send');

	const onWalletBtnClick = () => {
		setWalletEngaged(!walletEngaged);
	}

	return (
		<div className="App">
			<header>
				<div className="container flex justify-between items-center py-1 px-4 mx-auto text-white">
					<img src={logo} alt="sovryn logo" className="logo" />
					<WalletBtn engaged={walletEngaged} onWalletClick={onWalletBtnClick} />
				</div>
			</header>
			<div className="walletApp container mx-auto flex justify-center items-start">
				<div className={`${!walletEngaged ? "backdrop" : ""} bd-1`}></div>
				<RenderStep 
					assetActive={assetActive} 
					setAssetActive={setAssetActive} 
					weenusBalance={weenusBalance} 
					rethBalance={rethBalance}
					walletEngaged={walletEngaged}
					transactionStep={transactionStep}
					setTransactionStep={setTransactionStep}
					setWeenusBalance={setWeenusBalance}
					setRethBalance={setRethBalance}
				/>
			</div>
		</div>
	);
}

export default App;
