import React from 'react';
import { WhiteLabelProvider } from 'react-whitelabel';
import Header from './Header';

(ctx => ctx.keys().map(ctx))(require.context('./css', true, /.*.css/));

const images = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    return keys.reduce((o, k, i) => {
        const parts = k.split('/');
        o[parts[1]] = { [parts[2].split('.')[0]]: values[i] };
        return o;
    }, {});
})(require.context('./assets', true, /.*/));

const labels = {
    cars: {
        ...images.cars
    },
    trucks: {
        ...images.trucks
    }
};

const label = process.env.REACT_APP_LABEL;

export default class App extends React.Component {
    render() {
        return (
            <WhiteLabelProvider labels={labels} selectedLabel={label}>
              <div className={label}>
                <Header />
              </div>
            </WhiteLabelProvider>
        );
    }
}
