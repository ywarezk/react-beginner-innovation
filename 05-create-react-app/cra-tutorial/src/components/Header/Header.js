import piglet from './piglet.png';
// { header: 'sdfasdf234234' }
// scss
import styles from './Header.module.scss';
import Button from '@material-ui/core/Button';

export default function Header() {
	return (
		<header className={styles.header}>
			<img src={piglet} height="200" />
			<h1>
				Hello header
			</h1>
			<Button variant="contained" color="primary">
				Hello
			</Button>
		</header>
	)
}