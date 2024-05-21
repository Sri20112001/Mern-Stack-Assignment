1. What is JSX?
    JSX (JavaScript XML) is a syntax extension for JavaScript used primarily with React to describe what the UI should look like. It allows developers to write HTML-like code within JavaScript, making it easier to create and visualize UI components.

2. Superpowers of JSX
    . Syntactic Sugar
    . Component Composition
    . Dynamic Content
    . Reactivity
    . Tooling and Ecosystem

3. Role of type attribute in the script tag? What options can I use there?
    . type="text/javascript"
    . type="module"
    . type="text/babel"

4. {TitleComponent} vs {} vs {} in JSX
    . <TitleComponent />: This is how you include a React component. The component TitleComponent is rendered here.
    . {}: Used to embed a JavaScript expression. For example, {2 + 2} renders 4
    . {...}: Spread attributes. When used inside a component, it spreads the properties of an object into individual props. For example, <Component {...props} />