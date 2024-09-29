import data from './colors.json';

const App = () => {
    return (
        <div style={{ margin: '2em' }}>
            {data.map(color => (
                // main color
                <div key={color.hex}>
                    <p>
                        <b>
                            {color.name} (<span style={{ color: `#${color.hex}` }}>#{color.hex}</span>)
                        </b>
                    </p>
                    <div style={{ marginBottom: '1em' }}>
                        {color.comp.map(compColor => (
                            <div key={compColor.hex} style={{ marginLeft: '1em' }}>
                                <p>
                                    &bull;{compColor.name}(<span style={{ color: `#${compColor.hex}` }}>#{compColor.hex}</span>)
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default App;
