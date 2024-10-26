const families = {
  roboto: {
    titles: 'var(--font-roboto)',
    body: 'var(--font-roboto)'
  }
};

const weights = {
  regular: 400,
  bold: 700
};

const typography = {
  fontFamily: families.roboto.body,
  h1: {
    fontFamily: families.roboto.body,
    fontWeight: weights.bold,
    fontSize: '2.5rem'
  },
  h2: {
    fontFamily: families.roboto.body,
    fontWeight: weights.bold,
    fontSize: '2rem'
  },
  h3: {
    fontFamily: families.roboto.body,
    fontWeight: weights.bold,
    fontSize: '1.75rem'
  },
  h4: {
    fontFamily: families.roboto.body,
    fontWeight: weights.bold,
    fontSize: '1.5rem'
  },
  h5: {
    fontFamily: families.roboto.body,
    fontWeight: weights.bold,
    fontSize: '1.25rem'
  },
  h6: {
    fontFamily: families.roboto.body,
    fontWeight: weights.bold,
    fontSize: '1.125rem'
  },
  subtitle1: {
    fontFamily: families.roboto.body
  },
  subtitle2: {
    fontFamily: families.roboto.body
  },
  body1: {
    fontFamily: families.roboto.body,
    fontWeight: weights.regular,
    fontSize: '1rem'
  },
  body2: {
    fontFamily: families.roboto.body,
    fontWeight: weights.regular,
    fontSize: '0.875rem'
  },
  button: {
    fontFamily: families.roboto.body
  },
  caption: {
    fontFamily: families.roboto.body,
    fontWeight: weights.regular,
    fontSize: '0.75rem'
  },
  overline: {
    fontFamily: families.roboto.body
  }
};

export default typography;
