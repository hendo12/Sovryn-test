import React, { useState, useEffect } from 'react';
import logo from './assets/sovryn-logo-white.svg';
import WalletBtn from './components/WalletBtn';
import RenderStep from './components/RenderStep';
import WeenusToken from './ABI/WeenusTokenABI.json';

const Web3 = require('web3');
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const WeenusTokenAddress = '0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA';

const App = () => {
	const [walletEngaged, setWalletEngaged] = useState(false);
	const [weenusBalance, setWeenusBalance] = useState(0);
	const [rethBalance, setRethBalance] = useState(0);
	const [assetActive, setAssetActive] = useState('rETH');
	const [transactionStep, setTransactionStep] = useState('Send');
	const [walletAddress, setWalletAddress] = useState('');
	const [assetAmountToSend, setAssetAmountToSend] = useState(0);
    const [targetWalletAddress, setTargetWalletAddress] = useState('');
	const [transactionHash, setTransactionHash] = useState('');

	const ethEnabled = async () => {
		if (window.ethereum) {
		  await window.ethereum.send('eth_requestAccounts');
		  web3 = new Web3(window.ethereum);

		  web3.eth.getAccounts()
		  .then((res) => {	
			  console.log('user accounts response: ', res);		  
			  setWalletAddress(res[0]);
			  setWalletEngaged(true);
			});
			
		  return true;
		}
		return false;
	}

	const onWalletBtnClick = async () => {
		if(!walletEngaged) {
			ethEnabled();

		} else {
			setWalletEngaged(false);
			//sign user out
		}
	};

	const sendEth = () => {
		const transactionObject = {
			'from': walletAddress,
			'to': targetWalletAddress, 
			'value': web3.utils.toWei(`${assetAmountToSend}`, 'ether'),
			'chain': 'ropsten'
		};

		web3.eth.sendTransaction(transactionObject, (error, result) => {
			console.log('send eth error: ', error);
			console.log('send eth result: ', result);
			setTransactionHash(result);
			setTransactionStep('Details');
		});
	};

	// const checkTransactionStatus = () => {
	// 	web3.eth.getTransactionReceipt(transactionHash);
	// }

	useEffect( () => { 
		const getEthBalance = () => {
			web3.eth.getBalance(walletAddress, (error, wei) => {
				setRethBalance(web3.utils.fromWei(wei, 'ether'));
			});
		};

		const getWeenusBalance = () => {
			const tokenInst = new web3.eth.Contract(WeenusToken, WeenusTokenAddress);

			tokenInst.methods.balanceOf(walletAddress).call().then((bal) => {
				// console.log('weenus bal: ', bal);
				setWeenusBalance(bal);
			})
		}

		if(walletAddress !== '') {
			console.log('state wallet address is: ', walletAddress);
			getEthBalance();
			getWeenusBalance();
		}
	}, [walletAddress, transactionHash]);

	return (
		<div className="App">
			<header>
				<div className="container flex justify-between items-center py-1 px-4 mx-auto text-white">
					<img src={logo} alt="sovryn logo" className="logo" />
					<WalletBtn 
						engaged={walletEngaged} 
						onWalletClick={onWalletBtnClick} 
						userWalletAddress={walletAddress}
					/>
				</div>
			</header>
			<div className="walletApp mx-auto flex justify-center items-start">
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
					walletAddress={walletAddress}
					assetAmountToSend={assetAmountToSend}
					setAssetAmountToSend={setAssetAmountToSend}
					targetWalletAddress={targetWalletAddress}
					setTargetWalletAddress={setTargetWalletAddress}
					sendEth={sendEth}
					transactionHash={transactionHash}
				/>
			</div>
		</div>
	);
}

export default App;
