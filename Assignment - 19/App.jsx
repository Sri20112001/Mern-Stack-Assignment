const NestedHeadersComponent = () => {
    return (
      <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </div>
    );
  };

  const NestedHeadersWithAttributes = () => {
    return (
      <div className="title">
        <h1 style={{ color: 'red' }}>Heading 1</h1>
        <h2 className="subheading">Heading 2</h2>
        <h3 id="third-heading">Heading 3</h3>
      </div>
    );
  };

  