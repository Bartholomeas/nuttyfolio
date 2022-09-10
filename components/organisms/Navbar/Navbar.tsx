import BurgerButton from '../../atoms/BurgerButton/BurgerButton';
import Logo from '../../atoms/Logo/Logo';
import NavList from '../../molecules/NavList/NavList';
import useReduxDispatch from '../../../hooks/useReduxDispatch';
import NavLinkItem from '../../atoms/NavLink/NavLink';
import NavListItem from '../../atoms/NavListItem/NavListItem';
import { MdDashboard, MdSettings, MdSearch, MdAccountBalanceWallet, MdHistory, MdLogout } from 'react-icons/md';
import SelectMenu from '../../molecules/SelectMenu/SelectMenu';
import ThemeSwitch from '../../molecules/ThemeSwitch/ThemeSwitch';

const Navbar = () => {
	const { toggleNavbar, isNavOpen, toggleTheme, isThemeDark } = useReduxDispatch();

	const languages = {
		english: 'ENG',
		polish: 'PL',
		german: 'GER',
	};
	const currencies = {
		dollar: 'USD',
		zloty: 'PLN',
		euro: 'EUR',
	};

	return (
		<nav
			className='fixed h-[100px] flex w-full t-0 l-0 bg-baseVeryLight z-200
		md:relative md:h-full md:max-w-[150px]'>
			<div
				className='nav-wrapper flex justify-between items-center w-full
				 px-md py-sm
			 md:flex-col md:min-w-[150px] md:max-w-[200px] md:w-auto md:h-full md:px-0 overflow-hidden'>
				<Logo />
				<BurgerButton onClickFn={toggleNavbar} />
				<div
					className={`nav-menu fixed flex flex-col justify-center items-center w-full top-[100px] left-0 bottom-0 right-0 bg-white transition-transform 
				 md:relative md:justify-around md:top-0 md:w-ful md:my-auto md:h-full md:bg-transparent md:translate-x-0  ${
						isNavOpen ? 'translate-x-0' : 'translate-x-[-100%] '
					}`}>
					<NavList>
						<NavListItem>
							<NavLinkItem route='/'>
								<MdDashboard className='icon' />
								Dashboard
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem route='/search'>
								<MdSearch className='icon' />
								Search
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem route='/wallet'>
								<MdAccountBalanceWallet className='icon' />
								Wallet
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem route='/history'>
								<MdHistory className='icon' />
								History
							</NavLinkItem>
						</NavListItem>
						<NavListItem>
							<NavLinkItem route='/settings'>
								<MdSettings className='icon' /> Settings
							</NavLinkItem>
						</NavListItem>
					</NavList>
					<NavList>
						<NavListItem>
							<a className='text-error flex items-center gap-sm cursor-pointer'>
								<MdLogout className='icon text-error' />
								Logout
							</a>
						</NavListItem>
						<li>
							<SelectMenu options={languages}>Language</SelectMenu>
						</li>
						<li>
							<SelectMenu options={currencies}>Currency</SelectMenu>
						</li>
						<li>
							<ThemeSwitch toggleThemeFunc={toggleTheme} isThemeDark={isThemeDark} />
						</li>
					</NavList>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
