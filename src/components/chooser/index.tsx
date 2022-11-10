import { Component, h } from 'preact';
import style from './style.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {
}

interface IState {
	food: string[];
	selectedFood: string
}


class Chooser extends Component<IProps, IState> {

	constructor() {
		super();
		this.state = {
			food: ['BBQ Pork', 'Nandos', 'Pub burgers', 'Rib\'s and burgers', 'Meat and Bun', 'Sushi', 'what they have on level 1', 'mush from Ennex 100'],
			selectedFood: ''
		};
	}

	// Lifecycle: Called whenever our component is created
	componentDidMount() {
		this.selectFood();
	}

	// Lifecycle: Called just before our component will be destroyed
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	componentWillUnmount() {
	}

	onSubmit = (event: Event) => {
		event.preventDefault();
		this.selectFood();
	}

	render() {
		const day = new Date().getDay();
		const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		return <div class={style.chooser}>
			<h1>It's a {weekday[day]}</h1>
			<h1>Better get some {this.state.selectedFood}</h1>
			<form onSubmit={this.onSubmit}>
				<button type="submit">Or try something else</button>
			</form>

		</div>;
	}

	selectFood() {
		const day = new Date().getDay();
		if (day == 5) {
			this.setState({ selectedFood: 'BBQ Pork' });
		} else {
			const food = this.state.food[Math.floor(Math.random() * this.state.food.length)];
			this.setState({ selectedFood: food });
		}
	}
}


export default Chooser;
