import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, {ReactElement} from "react";
import StatedBalanceForm from "./StatedBalanceForm";
import BalanceService from "./BalanceService";


Enzyme.configure({adapter: new Adapter()});

describe('StatedBalanceForm', () => {
    it('renders without crashing given the required props', () => {
        const wrapper = mount(<StatedBalanceForm balanceService={new BalanceService()}/>);

        expect(wrapper).toMatchSnapshot();
    })
})
