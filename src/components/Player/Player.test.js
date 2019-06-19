import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const playerScorePassed = '14';
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = playerComponent.find('.Player__score').text();

  expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('on plus click, callback called with correct value', () => {
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

	const plusButton = playerComponent.find('.Player__button');

	plusButton.first().simulate('click');

	expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('on minus click, callback called with correct value', () => {
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

	const plusButton = playerComponent.find('.Player__button');

	plusButton.last().simulate('click');

	expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

