const translate = require('../translate');
const { FormattedMessage } = require('../index');

const React = require('react');
const TestRenderer = require('react-test-renderer');

global.I18n = {
  translate: jest.fn((message, options) => {
    switch (message) {
      case 'test':
        return 'Test';
      case 'message':
        if (options && options.scope === 'first.second')
          return 'first.second.message';
    }
    return;
  }),
  lookup: jest.fn()
};

describe('index.js', () => {
  describe('getIntlMessage', () => {
    it('returns translation from I18n.translate', () => {
      expect(translate('test')).toBe('Test');
    });

    describe('when it is not found', () => {
      it('returns fallback translation for the previous scope', () => {
        expect(translate('message', { scope: 'first.second.third' })).toBe(
          'first.second.message'
        );
      });
    });
  });

  describe('FormattedMessage', () => {
    var component;
    beforeAll(() => {
      component = TestRenderer.create(
        React.createElement(FormattedMessage, { message: 'test' })
      );
    });

    it('renders', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
